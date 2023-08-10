import { Router } from 'express';

import { ResponseData, ResponseError } from '../../../utils/responseStandart';
import { CreateChatBody } from './types';
import createChat from '../../../controllers/createChat';
import { Types } from 'mongoose';
import protectedRoute from '../../../middlewares/auth.middleware';
import ProtectedRouteRequest from '../../../types/ProtectedRouteRequest.type';
import { createChatToken } from '../../../utils/jwt';

const chatRoute = Router();

chatRoute.post(
  '/api/chat/createChat',
  protectedRoute,
  async (req: ProtectedRouteRequest, res) => {
    const body: CreateChatBody = req.body;

    try {
      const { iv, chatID } = await createChat(
        new Types.ObjectId(req.user?.user_id),
      );

      const chatToken = createChatToken(iv, chatID);

      return ResponseData({chatToken}, res);
    } catch (error) {
      return ResponseError((error as Error).message, res, 400);
    }
  },
);

export default chatRoute;
