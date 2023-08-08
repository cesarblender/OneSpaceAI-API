import bcrypt from 'bcrypt';

async function hashText(text: string): Promise<string> {
  const salt = await bcrypt.genSalt(14);

  const hash = await bcrypt.hash(text, salt);

  return hash;
}

async function compareHash(text: string, hash: string): Promise<boolean> {
  const areEqual = await bcrypt.compare(text, hash);

  return areEqual;
}

export { hashText, compareHash };
