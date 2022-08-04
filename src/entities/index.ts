import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { DB } from '../utils/secret';

import { Actor } from './actor.entity';
import { Movie } from './movie.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB.HOST,
  port: DB.PORT,
  username: DB.USER,
  password: DB.PASSWORD,
  database: DB.NAME,
  synchronize: true,
  logging: true,
  entities: [Actor, Movie],
  subscribers: [],
  migrations: [],
});
