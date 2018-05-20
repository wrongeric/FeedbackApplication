const mongoose = require("mongoose");
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String],
  Yes: { type: Number, default: 0 },
  No: { type: Number, default: 0 }
});

mongoose.model("surveys", surveySchema);
