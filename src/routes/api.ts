import { Router } from 'express';
import { privateRoute } from '../config/passport';

import * as UserController from '../controllers/user.controller';
import * as TestController from '../controllers/test.controller';

const router = Router();

router.post('/test', TestController.mail);

router.get('/users', privateRoute, UserController.getAll);
router.post('/auth/login', privateRoute, UserController.login);
router.post('/auth/register', UserController.register);

export default router;