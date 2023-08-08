import { Request } from 'express';
import TokenData from './TokenData.types';

type ProtectedRouteRequest = Request & { user?: TokenData };

export default ProtectedRouteRequest;
