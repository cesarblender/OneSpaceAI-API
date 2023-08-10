import { Types } from 'mongoose';

import ChatModel from '../database/models/chat.model';
import { encrypt } from '../utils/encryption';
import config from '../core/config';

/**
 *
 * @param userID The user id from JWT
 * @returns iv, a public key to decrypt the conversations
 */
async function createChat(
  userID: Types.ObjectId,
  title: string,
): Promise<{ iv: string; chatID: Types.ObjectId }> {
  const maxAllowedChats = config.chat.free.maxAllowedChats;

  const userChatsCount = await ChatModel.countDocuments({ owner: userID });

  if (userChatsCount >= maxAllowedChats) {
    throw new Error('The user already has the maximum allowed chats count');
  }

  const { encryptedMessage, iv } = encrypt('', config.encryptionKey);

  const newChat = new ChatModel({
    messages: encryptedMessage,
    owner: userID,
    title,
  });

  await newChat.save();

  return { iv, chatID: newChat._id };
}

export default createChat;
