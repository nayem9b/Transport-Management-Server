import { NextFunction, Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import {
  createRequisitionToDB,
  deleteRequisitionFromDB,
  getAllRequisitionFromDB,
  getAllUnverifiedRequisitionFromDB,
  getUserRequisitionFromDB,
  updateRequisitionFromDB,
} from "./requisition.service";
import { IRequisition } from "./requisition.interface";

export const createRequisition: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;

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

export const getUnverifiedRequisitions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await getAllUnverifiedRequisitionFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Unverified Requisions retrived successfully!",
      data: result,
    });
  }
);

export const deleteSpecificRequisation = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await deleteRequisitionFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Requisition DELETED successfully !",
      data: result,
    });
  }
);

export const updateRequisitionStatus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await updateRequisitionFromDB(id, updatedData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "status UPDATED successfully !",
      data: result,
    });
  }
);
export const getUserRequisition = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.params.id;

    const result = await getUserRequisitionFromDB(email);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "user Requisition Retrived successfully !",
      data: result,
    });
  }
);
