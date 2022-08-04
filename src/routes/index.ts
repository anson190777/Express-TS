import { Router } from 'express';
import { MovieRoutes } from './movie-routes';

const router: Router = Router();

router.use('/movies', MovieRoutes);

export const MainRouter: Router = router;
