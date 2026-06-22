import * as env from '../config/env.config';
declare const NotificationCounter: import("mongoose").Model<env.NotificationCounter, {}, {}, {}, import("mongoose").Document<unknown, {}, env.NotificationCounter, {}, import("mongoose").DefaultSchemaOptions> & env.NotificationCounter & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.NotificationCounter>;
export default NotificationCounter;
