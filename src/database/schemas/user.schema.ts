import { Schema } from 'mongoose';
import IUser from '../types/IUser.types';

const UserSchema = new Schema<IUser>({
  email: { type: String, unique: true },
  password: String,
  name: String,
});

export default UserSchema;
