import { Router } from 'express';
import signupRoute from './auth/signup';

const router = Router();

router.use(signupRoute);

export default router;
