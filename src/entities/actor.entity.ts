import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('actors')
export class Actor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
}
