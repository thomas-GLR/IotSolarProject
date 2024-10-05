import { Temperature } from "./temperature.model";

export enum ReadingDeviceName {
  TOP = 'TOP',
  MIDDLE = 'MIDDLE',
  BOTTOM = 'BOTTOM'
}

export interface IReadingDeviceDto {
  id: number;
  name: ReadingDeviceName;
  temperatures: Temperature[];
}

export interface IReadingDevice {
  id: number;
  name: ReadingDeviceName;
  temperatures: Temperature[];
}

export class ReadingDevice implements IReadingDevice {
  id: number;
  name: ReadingDeviceName;
  temperatures: Temperature[];

  constructor(dto: IReadingDeviceDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.temperatures = dto.temperatures;
  }
}
