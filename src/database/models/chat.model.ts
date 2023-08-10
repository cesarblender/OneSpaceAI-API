import { model } from 'mongoose';
import ChatSchema from '../schemas/chat.schema';
import IChat from '../types/IChat.types';

const ChatModel = model<IChat>('Chat', ChatSchema);

export default ChatModel;
