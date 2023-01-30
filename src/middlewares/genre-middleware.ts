import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function validateGenre(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(422).send(error.message);
      }
  
      next();
    };
  }