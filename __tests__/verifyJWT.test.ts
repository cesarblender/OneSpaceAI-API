import { createAccessAndRefreshToken } from '../src/utils/jwt';
import { config } from 'dotenv';

describe('Verify jwt', () => {
  beforeAll(() => {
    config();
  });

  it('should be defined access and refresh tokens', async () => {
    const tokens = createAccessAndRefreshToken({
      user_email: 'example@example.com',
      user_id: '13648354354',
    });
    expect(tokens.access).toBeDefined();
    expect(tokens.refresh).toBeDefined();
  });

  it('length of both tokens should be greater than 10', async () => {
    const tokens = createAccessAndRefreshToken({
      user_email: 'example@example.com',
      user_id: '13648354354',
    });

    expect(tokens.access.length).toBeGreaterThan(10);
    expect(tokens.refresh.length).toBeGreaterThan(10);
  });
});
