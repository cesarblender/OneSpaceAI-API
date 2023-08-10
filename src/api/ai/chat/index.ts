import { Router } from 'express';
import { Types } from 'mongoose';

import { ResponseData, ResponseError } from '../../../utils/responseStandart';
import { CreateChatBody } from './types';
import createChat from '../../../controllers/createChat';
import protectedRoute from '../../../middlewares/auth.middleware';
import ProtectedRouteRequest from '../../../types/ProtectedRouteRequest.type';
import { createChatToken } from '../../../utils/jwt';
import getUserChats from '../../../controllers/getUserChats';

const chatRoute = Router();

chatRoute.post(
  '/api/ai/createChat',
  protectedRoute,
  async (req: ProtectedRouteRequest, res) => {
    const body: CreateChatBody = req.body;

    try {
      const { iv, chatID } = await createChat(
        new Types.ObjectId(req.user?.user_id),
        body.chatTitle,
      );

      const chatToken = createChatToken(iv, chatID);

      return ResponseData({ chatToken }, res);
    } catch (error) {
      return ResponseError((error as Error).message, res, 400);
    }
  },
);

chatRoute.get(
  '/api/ai/chats',
  protectedRoute,
  async (req: ProtectedRouteRequest, res) => {
    const body: CreateChatBody = req.body;

    try {
      const chats = await getUserChats(new Types.ObjectId(req.user?.user_id));

      return ResponseData({ chats }, res);
    } catch (error) {
      return ResponseError((error as Error).message, res, 400);
    }
  },
);

export default chatRoute;
