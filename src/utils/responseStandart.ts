import { Response } from 'express';

function ResponseError(
  error: string,
  response: Response,
  status: number = 400,
): Response {
  return response
    .status(status)
    .json({ error: { status: status, message: error } });
}

type IResponseData<T> = {
  data: T;
  status: number;
};

function ResponseData<T>(
  data: T,
  response: Response,
  status: number = 200,
): Response {
  const responseData: IResponseData<T> = {
    data: data,
    status: status,
  };
  return response.status(status).json(responseData);
}

export { ResponseError, ResponseData };
