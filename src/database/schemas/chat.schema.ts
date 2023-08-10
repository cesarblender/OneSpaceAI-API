import { Schema, Types } from 'mongoose';
import IChat from '../types/IChat.types';

const ChatSchema = new Schema<IChat>({
  owner: Types.ObjectId,
  messages: String,
});

export default ChatSchema;
