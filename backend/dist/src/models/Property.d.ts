import * as env from '../config/env.config';
declare const Property: import("mongoose").Model<env.Property, {}, {}, {}, import("mongoose").Document<unknown, {}, env.Property, {}, import("mongoose").DefaultSchemaOptions> & env.Property & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Property>;
export default Property;
