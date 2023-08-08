import { Router } from 'express';

import { ResponseData, ResponseError } from '../../../utils/responseStandart';
import { checkAuthToken, createToken } from '../../../utils/jwt';
import { RefreshBody } from './types';
import TokenData from '../../../types/TokenData.types';

const refreshRoute = Router();

// Route to get access token with refresh token
refreshRoute.post('/api/auth/refresh', async (req, res) => {
  const body: RefreshBody = req.body;

  try {
    const tokenData = checkAuthToken<TokenData>(body.refresh_token, 'refresh');

    const token = createToken(tokenData, 'access');

    return ResponseData({ access_token: token }, res);
  } catch (error) {
    return ResponseError((error as Error).message, res, 401);
  }
});

export default refreshRoute;
