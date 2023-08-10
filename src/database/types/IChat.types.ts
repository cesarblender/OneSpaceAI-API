import { Types } from 'mongoose';

interface IChat {
  owner: Types.ObjectId;
  messages: string;
}

export default IChat;
