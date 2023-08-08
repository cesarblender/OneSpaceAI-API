import jwt from 'jsonwebtoken';
import config from '../core/config';
import TokenData from '../types/TokenData.types';

function createToken<T>(data: T, type: 'access' | 'refresh'): string {
  const isAccessToken: boolean = type === 'access';
  const duration: string = isAccessToken
    ? config.jwt.accessTokenDuration
    : config.jwt.refreshTokenDuration;

  const secret: string = isAccessToken
    ? config.jwt.accessSecret
    : config.jwt.refreshSecret;

  const token = jwt.sign({ type, data }, secret, {
    expiresIn: duration,
    algorithm: isAccessToken ? 'HS256' : 'HS512',
  });

  return token;
}

function createAccessAndRefreshToken(user: TokenData): {
  access: string;
  refresh: string;
} {
  const access = createToken<TokenData>(user, 'refresh');
  const refresh = createToken<TokenData>(user, 'access');

  return { access, refresh };
}

export { createToken, createAccessAndRefreshToken };
