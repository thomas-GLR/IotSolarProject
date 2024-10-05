import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { TemperatureDto } from './temperature.dto';
import { TemperaturesService } from './temperatures.service';
import { ReadingDevicesService } from '../reading-devices/reading-devices.service';
import { Temperature } from './temperature.entity';

@Controller('temperatures')
export class TemperaturesController {
  private readonly logger = new Logger(TemperaturesController.name);

  constructor(
    private temperaturesService: TemperaturesService,
    private readingDevicesService: ReadingDevicesService,
  ) {}

  @Get()
  async getAllTemperatures(): Promise<TemperatureDto[]> {
    let temperaturesDtos: TemperatureDto[] = [];
    await this.temperaturesService.getAllTemperatures().then((temperatures) => {
      temperaturesDtos = temperatures
        .sort((a, b) => b.collectionDateToDate() - a.collectionDateToDate())
        .map((temperature) => {
          return <TemperatureDto>{
            id: temperature.id,
            value: temperature.value,
            collectionDate: temperature.collectionDate,
            readingDeviceName: temperature.readingDevice.name,
          };
        });
    });

    return temperaturesDtos;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() temperatureDto: TemperatureDto) {
    this.temperaturesService.createTemperature(temperatureDto);
  }

  @Get('last-temperatures')
  async getLastTemperaturesFromReadingDevice(): Promise<TemperatureDto[]> {
    const temperatures: TemperatureDto[] = [];
    const readingDevices = await this.readingDevicesService.findAll();
    readingDevices.forEach((readingDevice) => {
      readingDevice.temperatures.sort(
        (a, b) => b.collectionDateToDate() - a.collectionDateToDate(),
      );
      this.logger.log(readingDevice.temperatures[0]);
      const lastTemperature = readingDevice.temperatures[0];
      temperatures.push(<TemperatureDto>{
        id: lastTemperature.id,
        value: lastTemperature.value,
        collectionDate: lastTemperature.collectionDate,
        readingDeviceName: readingDevice.name,
      });
    });

    return temperatures;
  }
}
