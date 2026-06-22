import * as env from '../config/env.config';
declare const LocationValue: import("mongoose").Model<env.LocationValue, {}, {}, {}, import("mongoose").Document<unknown, {}, env.LocationValue, {}, import("mongoose").DefaultSchemaOptions> & env.LocationValue & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.LocationValue>;
export default LocationValue;
