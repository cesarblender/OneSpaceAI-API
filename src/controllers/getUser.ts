import { Document } from 'mongoose';

import { SignUpBody } from '../api/auth/signup/types';
import UserModel from '../database/models/user.model';
import { compareHash } from '../utils/encryption';
import IUser from '../database/types/IUser.types';

async function getUser({
  email,
  password,
}: SignUpBody): Promise<Document & IUser> {
  const user = await UserModel.findOne({ email });

  if (!user) throw new Error('No user registered with the email provided');

  // Check if the provided password is equal to the stored password
  const arePasswordsEqual: boolean = await compareHash(password, user.password);
  if (!arePasswordsEqual) throw new Error('Incorrect password');

  return user;
}

export default getUser;
