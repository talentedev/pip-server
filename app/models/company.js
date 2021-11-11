const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2')

const CompanySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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

CompanySchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Company', CompanySchema)
