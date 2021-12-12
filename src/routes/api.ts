import { Router } from 'express';

import * as UserController from '../controllers/user.controller';
import * as TestController from '../controllers/test.controller';

const router = Router();

router.get('/test', TestController.mail);

router.post('/auth/login', UserController.login);
router.post('/auth/register', UserController.register);

export default router;