import { NextFunction, Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { createBusToDB, getAllBusFromDB } from "./bus.service";
import { IBus } from "./bus.interface";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";

export const createBus: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    const result = await createBusToDB(data);

    sendResponse<IBus>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bus added successfully !",
      data: result,
    });
  }
);

export const getAllBuses = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const allBus = await getAllBusFromDB();
    sendResponse<IBus[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Buses retrived successfully !",
      data: allBus,
    });
  }
);
