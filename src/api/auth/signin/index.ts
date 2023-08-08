import { Router } from 'express';

import { ResponseData, ResponseError } from '../../../utils/responseStandart';
import { SignUpBody } from '../signup/types';
import getUser from '../../../controllers/getUser';
import { createAccessAndRefreshToken } from '../../../utils/jwt';

const signinRoute = Router();

signinRoute.post('/api/auth/signin', async (req, res) => {
  const body: SignUpBody = req.body;

  try {
    const user = await getUser(body);

    const tokens = createAccessAndRefreshToken({
      user_id: user._id,
      user_email: user.email,
    });

    return ResponseData(tokens, res);
  } catch (error) {
    return ResponseError((error as Error).message, res, 400);
  }
});

export default signinRoute;
