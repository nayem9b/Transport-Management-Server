import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import {
  createRequisitionToDB,
  getAllRequisitionFromDB,
} from "./requisition.service";
import { IRequisition } from "./requisition.interface";

export const createRequisition: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    const result = await createRequisitionToDB(data);

    sendResponse<IRequisition>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Requision added successfully !",
      data: result,
    });
  }
);
export const getRequisitions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await getAllRequisitionFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Requision retrived successfully !",
      data: result,
    });
  }
);
