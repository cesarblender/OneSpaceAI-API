import jwt from 'jsonwebtoken';
import config from '../core/config';
import TokenData from '../types/TokenData.types';

type TokenTypes = 'access' | 'refresh';

function createToken<T>(data: T, type: TokenTypes): string {
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
  const access = createToken<TokenData>(user, 'access');
  const refresh = createToken<TokenData>(user, 'refresh');

  return { access, refresh };
}

function checkAuthToken<T>(token: string, type: TokenTypes): T {
  const isAccessToken: boolean = type === 'access';
  const secret = isAccessToken
    ? config.jwt.accessSecret
    : config.jwt.refreshSecret;

  const algorithm = isAccessToken ? 'HS256' : 'HS512';

  try {
    const decodedToken = jwt.verify(token, secret, { algorithms: [algorithm] });

    if (!decodedToken) {
      throw new Error('Failed to decode token');
    }

    const userData = decodedToken as { type: TokenTypes; data: T };

    if (userData.type !== type) {
      throw new Error('Wrong token type');
    }

    return userData.data;
  } catch (error) {
    throw new Error('Token verification failed: ' + (error as Error).message);
  }
}

export { createToken, createAccessAndRefreshToken, checkAuthToken };
