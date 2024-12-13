import { Request, Response, NextFunction } from 'express';

export class ErrorMiddleware {
  public static handle(error: Error, req: Request, res: Response, next: NextFunction): void {
    console.error(error.stack);
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
} 