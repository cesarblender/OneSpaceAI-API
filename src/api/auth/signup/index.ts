import { Router } from 'express';

import { SignUpBody } from './types';
import createUser from '../../../controllers/createUser';
import { ResponseData, ResponseError } from '../../../utils/responseStandart';
import { createAccessAndRefreshToken } from '../../../utils/jwt';
import { Document } from 'mongoose';
import IUser from '../../../types/IUser.types';

const signupRoute = Router();

signupRoute.post('/api/auth/signup', async (req, res) => {
  const body: SignUpBody = req.body;

  try {
    const newUser = await createUser(body);

    const tokens = createAccessAndRefreshToken({
      user_id: newUser._id,
      user_email: newUser.email,
    });

    return ResponseData(tokens, res, 201);
  } catch (error) {
    return ResponseError((error as Error).message, res, 400);
  }
});

export default signupRoute;
