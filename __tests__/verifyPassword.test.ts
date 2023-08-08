import verifyPassword from '../src/utils/verifyPassword';

describe('Verify Password', () => {
  it('should not throw an error for a strong password', async () => {
    const strongPassword = 'P@ssw0rd!';

    expect(() => verifyPassword(strongPassword)).not.toThrow();
  });

  it('should throw an error for a weak password', async () => {
    const weakPassword = 'abc';

    expect(() => verifyPassword(weakPassword)).toThrow();
  });
});
