const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const politicsSchema = new Schema(
    {
        _id: String,
        title: String,
        url: String, 
        reporter: String, 
        date: String, 
        img: String, 
        publisher: String, 
        contents: String,
    },
    {
        timestamps: true,
        collection: '정치'
    }
);

politicsSchema.statics.findAll = function () {
    return this.find({});
}

module.exports = module.exports = mongoose.model('politics', politicsSchema);