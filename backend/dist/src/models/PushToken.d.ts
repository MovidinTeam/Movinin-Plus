import * as env from '../config/env.config';
declare const PushToken: import("mongoose").Model<env.PushToken, {}, {}, {}, import("mongoose").Document<unknown, {}, env.PushToken, {}, import("mongoose").DefaultSchemaOptions> & env.PushToken & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.PushToken>;
export default PushToken;
