import { ReadingDevice, ReadingDeviceName } from "./readingDevice.model";

export interface ITemperature {
  id: number;
  value: number;
  collectionDate: Date;
  readingDeviceName: ReadingDeviceName;
}

export class Temperature implements ITemperature{
  id: number;
  value: number;
  collectionDate: Date;
  readingDeviceName: ReadingDeviceName;

  constructor(temperature: ITemperature) {
    this.id = temperature.id;
    this.value = temperature.value;
    this.collectionDate = temperature.collectionDate;
    this.readingDeviceName = temperature.readingDeviceName;
  }
}
