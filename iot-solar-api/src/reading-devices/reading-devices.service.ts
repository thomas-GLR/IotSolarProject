import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReadingDevice } from './reading-device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReadingDevicesService {
  constructor(
    @InjectRepository(ReadingDevice)
    private readingDevicesRepository: Repository<ReadingDevice>,
  ) {}

  findAll(): Promise<ReadingDevice[]> {
    return this.readingDevicesRepository.find({
      relations: ['temperatures'], // Charger la relation 'temperatures'
    });
  }

  findByName(name: string): Promise<ReadingDevice | null> {
    return this.readingDevicesRepository.findOneBy({ name });
  }
}
