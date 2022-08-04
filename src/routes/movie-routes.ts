import { Request, Response, Router } from 'express';

import { checkApiKey } from '../middlewares/authentication';
import { MovieController } from '../controllers/movie.controller';


const router: Router = Router();

const movieController: MovieController = new MovieController();

router.post('/', checkApiKey, (req: Request, res: Response) => { movieController.create(req, res); });

export const MovieRoutes: Router = router;
