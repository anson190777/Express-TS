import { Request, Response, NextFunction } from 'express';

import { API_KEY } from '../utils/secret';

export const checkApiKey = (req: Request, res: Response, next: NextFunction) => {
    // Get the jwt token from the head
    const token = <string>req.headers['api-key'];

    if (!token) return res.status(401).send();
    if (token !== API_KEY) return res.status(401).send();

    next();
};
