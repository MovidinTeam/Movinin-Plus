import { Schema, model } from 'mongoose';
const countrySchema = new Schema({
  values: {
    type: [Schema.Types.ObjectId],
    ref: 'LocationValue',
    required: [true, "can't be blank"],
    validate: value => Array.isArray(value)
  }
}, {
  timestamps: true,
  strict: true,
  collection: 'Country'
});
countrySchema.index({
  values: 1
});
const Country = model('Country', countrySchema);
export default Country;