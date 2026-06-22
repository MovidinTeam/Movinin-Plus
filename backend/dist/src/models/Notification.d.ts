import * as env from '../config/env.config';
declare const Notification: import("mongoose").Model<env.Notification, {}, {}, {}, import("mongoose").Document<unknown, {}, env.Notification, {}, import("mongoose").DefaultSchemaOptions> & env.Notification & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Notification>;
export default Notification;
