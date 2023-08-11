import { NextFunction, Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import {
  createBusToDB,
  deleteSpecificBusFromDB,
  getAllBusFromDB,
  updateSpecificBusFromDB,
} from "./bus.service";
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

export const updateSpecificBus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedData = req.body;
    console.log(id, updatedData);

    const result = await updateSpecificBusFromDB(id, updatedData);
    sendResponse<IBus>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Schedule UPDATED successfully !",
      data: result,
    });
  }
);

export const deleteSpecificBus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await deleteSpecificBusFromDB(id);
    sendResponse<IBus>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Bus DELETED successfully !",
      data: result,
    });
  }
);
