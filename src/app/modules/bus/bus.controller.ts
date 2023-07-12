import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { createBusToDB } from "./bus.service";
import { IBus } from "./bus.interface";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";

export const createBus: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await createBusToDB(data);

    sendResponse<IBus>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bus added successfully !",
      data: result,
    });
  }
);
