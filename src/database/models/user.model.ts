import { model } from 'mongoose';
import UserSchema from '../schemas/user.schema';
import IUser from '../../types/IUser.types';

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
