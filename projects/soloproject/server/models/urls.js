const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  URL: {
    type: "String"
  }
})


module.exports =mongoose.model("URL", urlSchema);
