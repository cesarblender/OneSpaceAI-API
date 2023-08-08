import verifyEmail from '../src/utils/verifyEmail';

describe('Verify Email', () => {
  it('should not throw an error for a invalid email', async () => {
    const validEmail = 'example@example.com';

    expect(() => verifyEmail(validEmail)).not.toThrow();
  });

  it('should throw an error for a invalid email', async () => {
    const invalidEmail = 'sfsdfmskl.com';

    expect(() => verifyEmail(invalidEmail)).toThrow();
  });

  it('should throw an error for a invalid email', async () => {
    const invalidEmail = 'asdlksjf@com';

    expect(() => verifyEmail(invalidEmail)).toThrow();
  });
});
