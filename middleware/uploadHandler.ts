import multer from 'multer';
import {Request, Response, NextFunction} from 'express';

const upload = multer({dest: 'uploads/'});

export const uploadMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return next(err);
    }
    next();
  });
};
