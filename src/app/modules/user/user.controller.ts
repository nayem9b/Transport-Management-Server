import { NextFunction, Request, Response } from "express";

export const confirmation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("My App is working");
};
