import { Repository } from 'typeorm';

import { AppDataSource } from '../entities';
import { Actor } from '../entities/actor.entity';

export interface IActorPayload {
  name: string;
  age: number;
}

export class ActorService {
  ActorRespository: Repository<Actor>;

  constructor() {
    this.ActorRespository = AppDataSource.getRepository(Actor);
  }

  async getAll(): Promise<Array<Actor>> {
    return this.ActorRespository.find();
  }

  async create(payload: IActorPayload): Promise<Actor> {
    const actor = new Actor();
    return this.ActorRespository.save({
      ...actor,
      ...payload,
    });
  }

  async detail(id: number): Promise<Actor> {
    return this.ActorRespository.findOneBy({id: id});
  }
}
