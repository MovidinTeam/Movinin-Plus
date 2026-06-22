import * as env from '../config/env.config';
declare const Country: import("mongoose").Model<env.Country, {}, {}, {}, import("mongoose").Document<unknown, {}, env.Country, {}, import("mongoose").DefaultSchemaOptions> & env.Country & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, env.Country>;
export default Country;
