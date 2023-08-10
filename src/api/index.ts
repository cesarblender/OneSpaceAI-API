import { Router } from 'express';

import signupRoute from './auth/signup';
import signinRoute from './auth/signin';
import refreshRoute from './auth/refresh';
import chatRoute from './ai/chat';

const router = Router();

// Auth
router.use(signupRoute);
router.use(signinRoute);
router.use(refreshRoute);
// End Auth

// AI
router.use(chatRoute);
// End Auth

export default router;
