function verifyPassword(password: string): void {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (passwordRegex.test(password)) throw new Error('Weak password');
}

export default verifyPassword;
