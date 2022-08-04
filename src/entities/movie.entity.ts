import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Actor } from './actor.entity';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @OneToMany(() => Actor, (actor) => actor.id)
  actors: Actor[];
}
