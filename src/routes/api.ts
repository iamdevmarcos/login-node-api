import { Router } from 'express';
import { privateRoute } from '../config/passport';

import * as UserController from '../controllers/user.controller';

const router = Router();

router.get('/users', privateRoute, UserController.getAll);
router.post('/auth/login', UserController.login);
router.post('/auth/register', UserController.register);

export default router;