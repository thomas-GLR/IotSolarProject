import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperaturesModule } from './temperatures/temperatures.module';
import { ReadingDevicesModule } from './reading-devices/reading-devices.module';
import { Temperature } from './temperatures/temperature.entity';
import { ReadingDevice } from './reading-devices/reading-device.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      // username: process.env.DATABASE_USERNAME,
      username: 'root',
      password: process.env.DATABASE_PASSWORD,
      database: 'iotsolar',
      entities: [Temperature, ReadingDevice],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TemperaturesModule,
    ReadingDevicesModule,
  ],
})
export class AppModule {
  constructor() {}
}
