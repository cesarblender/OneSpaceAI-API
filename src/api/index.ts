import { Router } from 'express';

import signupRoute from './auth/signup';
import signinRoute from './auth/signin';
import protectedRoute from '../middlewares/auth.middleware';
import ProtectedRouteRequest from '../types/ProtectedRouteRequest.type';

const router = Router();

router.use(signupRoute);
router.use(signinRoute);

router.get("/hola", protectedRoute, (req: ProtectedRouteRequest, res) => res.send("hola "))

export default router;
