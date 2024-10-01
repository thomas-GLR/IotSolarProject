import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Temperature } from '../temperatures/temperature.entity';

@Entity()
export class ReadingDevice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Temperature, (temperature) => temperature.readingDevice, {
    cascade: true,
  })
  temperatures: Temperature[];

  toString(): string {
    let object = `id: ${this.id}, name: ${this.name}, temperatures:`;
    this.temperatures.forEach(
      (temperature) => (object += `\n${temperature.toString()}`),
    );
    return object;
  }
}
