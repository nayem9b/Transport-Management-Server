import { NextFunction, Request, RequestHandler, Response } from "express";
import { createUserToDB } from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IUser } from "./user.interface";

export const confirmation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("My App is working");
};

export const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await createUserToDB(data);

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User CREATED successfully !",
      data: result,
    });
  }
);
