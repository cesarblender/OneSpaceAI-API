import bcrypt from 'bcrypt';
import crypto from 'crypto';

async function hashText(text: string): Promise<string> {
  const salt = await bcrypt.genSalt(14);

  const hash = await bcrypt.hash(text, salt);

  return hash;
}

async function compareHash(text: string, hash: string): Promise<boolean> {
  const areEqual = await bcrypt.compare(text, hash);

  return areEqual;
}

type EncryptionResult = {
  encryptedMessage: string;
  iv: string;
};

function encrypt(message: string, key: string): EncryptionResult {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(key, 'hex'),
    iv,
  );
  let encryptedMessage = cipher.update(message, 'utf-8', 'hex');
  encryptedMessage += cipher.final('hex');
  return { encryptedMessage, iv: iv.toString('hex') };
}

function decrypt(encryptedMessage: string, key: string, iv: string): string {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(key, 'hex'),
    Buffer.from(iv, 'hex'),
  );
  let decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8');
  decryptedMessage += decipher.final('utf-8');
  return decryptedMessage;
}

export { hashText, compareHash, encrypt, decrypt };
