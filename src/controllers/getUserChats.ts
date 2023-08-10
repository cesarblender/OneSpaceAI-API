import { Types } from 'mongoose';
import ChatModel from '../database/models/chat.model';

async function getUserChats(
  userID: Types.ObjectId,
): Promise<{ chatID: Types.ObjectId }[]> {
  const userChats = await ChatModel.find({ owner: userID });

  const chatsData = userChats.map((chat) => ({
    chatID: chat._id,
    chatTitle: chat.title,
  }));

  return chatsData;
}

export default getUserChats;
