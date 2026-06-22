import { Schema, model } from 'mongoose';
const locationSchema = new Schema({
  country: {
    type: Schema.Types.ObjectId,
    required: [true, "can't be blank"],
    ref: 'Country',
    index: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  values: {
    type: [Schema.Types.ObjectId],
    ref: 'LocationValue',
    required: [true, "can't be blank"],
    validate: value => Array.isArray(value)
  },
  image: {
    type: String
  },
  parentLocation: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  }
}, {
  timestamps: true,
  strict: true,
  collection: 'Location'
});
locationSchema.index({
  values: 1
});
const Location = model('Location', locationSchema);
export default Location;