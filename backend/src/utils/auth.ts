// auth.ts

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers;
  const authorization = headers.authorization;
  if (!authorization) return res.send(401);
  try {
    const token = authorization.split(" ")[1]; //"bareer afasdfgasdhjeiiafid"
    jwt.verify(token, config.jwtSecret);
    next();
  } catch (err) {
    res.sendStatus(401);
  }
};
