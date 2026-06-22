import * as env from '../config/env.config';
export declare const BOOKING_EXPIRE_AT_INDEX_NAME = "expireAt";
declare const Booking: import("mongoose").Model<env.Booking, {}, {}, {}, import("mongoose").Document<unknown, {}, env.Booking, {}, import("mongoose").DefaultSchemaOptions> & env.Booking & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Booking>;
export default Booking;
