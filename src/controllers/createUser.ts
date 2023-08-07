import { Document } from 'mongoose';

import { SignUpBody } from '../api/auth/signup/types';
import UserModel from '../database/models/user.model';
import { hashText } from '../utils/encryption';
import verifyEmail from '../utils/verifyEmail';
import verifyPassword from '../utils/verifyPassword';
import IUser from '../types/IUser.types';

async function createUser(user: SignUpBody): Promise<Document & IUser> {
  verifyEmail(user.email);
  verifyPassword(user.password);

  user.password = await hashText(user.password);

  const newUser = new UserModel({
    email: user.email,
    password: user.password,
  });

  await newUser.save();

  return newUser;
}

export default createUser;
