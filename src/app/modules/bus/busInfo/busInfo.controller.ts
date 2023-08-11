import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../../../shared/sendResponse";
import { getBusInfoFromDB } from "./busInfo.service";
export const getBusInfo = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const allBus = await getBusInfoFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bus Info retrived successfully !",
      data: allBus,
    });
  }
);
