import { Repository } from 'typeorm';

import { AppDataSource } from '../entities';
import { Movie } from '../entities/movie.entity';

export interface IActorPayload {
  id: number;
}

export interface IMoviePayload {
  title: string;
  description: string;
  actors: IActorPayload[];
}

export class MovieService {
  MovieRepository: Repository<Movie>;

  constructor() {
    this.MovieRepository = AppDataSource.getRepository(Movie);
  }

  async getAll(): Promise<Array<Movie>> {
    return this.MovieRepository.find();
  }

  async create(payload: IMoviePayload): Promise<Movie> {
    const movie = new Movie();
    return this.MovieRepository.save({
      ...movie,
      ...payload,
    });
  }

  async detail(id: number): Promise<Movie> {
    return this.MovieRepository.findOneBy({id: id});
  }
}
