import { NextFunction, Request, RequestHandler, Response } from "express";
import {
  createUserToDB,
  getAdminFromDB,
  getTeacherFromDB,
} from "./user.service";
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
export const getAdminUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await getAdminFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "admin get successfully !",
      data: result,
    });
  }
);
export const getTeacher: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await getTeacherFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Teacher retrived successfully!",
      data: result,
    });
  }
);
