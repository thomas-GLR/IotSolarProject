import { Injectable } from '@nestjs/common';
import { Temperature } from './temperature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureDto } from './temperature.dto';
import { ReadingDevicesService } from '../reading-devices/reading-devices.service';

@Injectable()
export class TemperaturesService {
  constructor(
    @InjectRepository(Temperature)
    private temperaturesRepository: Repository<Temperature>,
    private readingDevicesService: ReadingDevicesService,
  ) {}

  async createTemperature(
    temperatureDto: TemperatureDto,
  ): Promise<Temperature> {
    const readingDevice = await this.readingDevicesService.findByName(
      temperatureDto.readingDeviceName,
    );

    const temperature = new Temperature();
    temperature.value = temperatureDto.value;
    temperature.collectionDate = temperatureDto.collectionDate;
    temperature.readingDevice = readingDevice;

    return await this.temperaturesRepository.save(temperature);
  }
}
