import { Types } from 'mongoose';

interface IChat {
  owner: Types.ObjectId;
  messages: string;
  title: string;
}

export default IChat;
