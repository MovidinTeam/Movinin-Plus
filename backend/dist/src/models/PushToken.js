import { Schema, model } from 'mongoose';
const pushTokenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "can't be blank"],
    ref: 'User',
    index: true
  },
  token: {
    type: String,
    required: [true, "can't be blank"]
  }
}, {
  timestamps: true,
  strict: true,
  collection: 'PushToken'
});
const PushToken = model('PushToken', pushTokenSchema);
export default PushToken;