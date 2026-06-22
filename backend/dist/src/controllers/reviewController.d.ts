import { Request, Response } from 'express';
export declare const createReview: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPropertyReviews: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPropertyRating: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
