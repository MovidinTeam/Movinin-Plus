import type { Request, Response, NextFunction } from 'express';
import * as movininTypes from ':movinin-types';
declare module 'express-serve-static-core' {
    interface Request {
        user?: {
            _id: string;
            type: movininTypes.UserType;
        };
    }
}
declare const _default: {
    verifyToken: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    authAdmin: (req: Request, res: Response, next: NextFunction) => void;
    authAgency: (req: Request, res: Response, next: NextFunction) => void;
};
export default _default;
