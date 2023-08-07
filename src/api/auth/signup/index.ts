import { Router } from 'express';

import { SignUpBody } from './types';
import createUser from '../../../controllers/createUser';
import { ResponseData } from '../../../utils/responseStandart';

const signupRoute = Router();

signupRoute.post("/api/auth/signup", async (req, res) => {
    const body: SignUpBody = req.body;

    const newUser = await createUser(body);

    return ResponseData(newUser, res, 201);
})

export default signupRoute;
