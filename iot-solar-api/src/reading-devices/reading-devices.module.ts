import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReadingDevice } from './reading-device.entity';
import { ReadingDevicesService } from './reading-devices.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReadingDevice])],
  exports: [ReadingDevicesService],
  providers: [ReadingDevicesService],
})
export class ReadingDevicesModule {}
