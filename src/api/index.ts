import { Router } from 'express';

import signupRoute from './auth/signup';
import signinRoute from './auth/signin';

const router = Router();

router.use(signupRoute);
router.use(signinRoute);

export default router;
