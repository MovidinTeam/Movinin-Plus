import * as env from '../config/env.config';
declare const Location: import("mongoose").Model<env.Location, {}, {}, {}, import("mongoose").Document<unknown, {}, env.Location, {}, import("mongoose").DefaultSchemaOptions> & env.Location & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Location>;
export default Location;
