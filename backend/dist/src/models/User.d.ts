import * as env from '../config/env.config';
export declare const USER_EXPIRE_AT_INDEX_NAME = "expireAt";
declare const User: import("mongoose").Model<env.User, {}, {}, {}, import("mongoose").Document<unknown, {}, env.User, {}, import("mongoose").DefaultSchemaOptions> & env.User & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.User>;
export default User;
