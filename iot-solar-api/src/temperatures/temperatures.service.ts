import { Injectable } from '@nestjs/common';
import { Temperature } from './temperature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureDto } from './temperature.dto';
import { ReadingDevicesService } from '../reading-devices/reading-devices.service';
import { CreateTemperatureDto } from './create-temperature.dto';

@Injectable()
export class TemperaturesService {
  constructor(
    @InjectRepository(Temperature)
    private temperaturesRepository: Repository<Temperature>,
    private readingDevicesService: ReadingDevicesService,
  ) {}

  getAllTemperatures(): Promise<Temperature[]> {
    return this.temperaturesRepository.find({
      relations: ['readingDevice'],
    });
  }

  async createTemperature(
    createTemperatureDto: CreateTemperatureDto,
  ): Promise<Temperature> {
    const currentDateTime = new Date();
    const readingDevice = await this.readingDevicesService.findByName(
      createTemperatureDto.sensorName,
    );

    const temperature = new Temperature();
    temperature.value = createTemperatureDto.value;
    temperature.collectionDate = currentDateTime;
    temperature.readingDevice = readingDevice;

    return await this.temperaturesRepository.save(temperature);
  }
}
