import { NextFunction, Response } from 'express';

import { ResponseError } from '../utils/responseStandart';
import { checkAuthToken } from '../utils/jwt';
import TokenData from '../types/TokenData.types';
import ProtectedRouteRequest from '../types/ProtectedRouteRequest.type';

function protectedRoute(req: ProtectedRouteRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return ResponseError('No access token provided', res, 403);
  }

  const token = authHeader.split(' ')[1];

  try {
    const tokenData = checkAuthToken<TokenData>(token, 'access');

    req.user = tokenData;

    next();
  } catch (error) {
    return ResponseError('Invalid token. \n' + (error as Error).message, res, 401);
  }
}

export default protectedRoute;
