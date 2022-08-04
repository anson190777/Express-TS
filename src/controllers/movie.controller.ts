import { Request, Response } from 'express';

import { MovieService } from '../services/movie.service';

export class MovieController {
    public movieService: MovieService = new MovieService();

    constructor() {
        // this.movieService = new MovieService();
    }

    async create(req: Request, res: Response) {
        const movie = await this.movieService.create(req.body);

        return res.json(movie);
    }
}
