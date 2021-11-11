const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2')

const TeamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

TeamSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('team', TeamSchema)
