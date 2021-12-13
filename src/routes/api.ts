import { Router } from 'express';

import * as UserController from '../controllers/user.controller';
import * as TestController from '../controllers/test.controller';

const router = Router();

router.post('/test', TestController.mail);

router.get('/users', UserController.getAll);
router.post('/auth/login', UserController.login);
router.post('/auth/register', UserController.register);

export default router;