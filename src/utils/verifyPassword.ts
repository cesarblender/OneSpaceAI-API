function verifyPassword(password: string): void {
  if (password.length < 8) throw new Error('Weak password');
}

export default verifyPassword;
