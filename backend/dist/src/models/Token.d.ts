import * as env from '../config/env.config';
export declare const TOKEN_EXPIRE_AT_INDEX_NAME = "expireAt";
declare const Token: import("mongoose").Model<env.Token, {}, {}, {}, import("mongoose").Document<unknown, {}, env.Token, {}, import("mongoose").DefaultSchemaOptions> & env.Token & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Token>;
export default Token;
