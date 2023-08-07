import bcrypt from 'bcrypt';

async function hashText(text: string): Promise<string> {
  const salt = await bcrypt.genSalt(14);

  const hash = await bcrypt.hash(text, salt);

  return hash;
}

export { hashText };
