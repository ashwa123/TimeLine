const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const { Schema } = require("mongoose");
mongoose.set('useCreateIndex', true);
const MongoClient = require('mongodb').MongoClient;

const commentSchema = Schema({
    "category": {
        type: String,
    },
    "name": {
        type: String,
    },
    "email": {
        type: String,
    },
    "comment": {
        type: String,
    }
},{collection:"Comment"});

let connection = {}

connection.getCommentCollection = () => {
    return mongoose.connect("mongodb+srv://timeline:Timeline123@timelinedb.jrt3n.mongodb.net/TimeLineDB?retryWrites=true&w=majority", { useNewUrlParser: true }).then((db) => {
        return db.model("Comment", commentSchema)
    }).catch((err) => {
        console.log(err.message);
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    })
}



module.exports = connection