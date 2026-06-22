import mongoose, { Document } from 'mongoose';
export interface ReviewDocument extends Document {
    property: mongoose.Types.ObjectId;
    user: mongoose.Types.ObjectId;
    booking?: mongoose.Types.ObjectId;
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const Review: mongoose.Model<ReviewDocument, {}, {}, {}, mongoose.Document<unknown, {}, ReviewDocument, {}, mongoose.DefaultSchemaOptions> & ReviewDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ReviewDocument>;
export default Review;
