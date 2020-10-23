const dbLayer = require("../models/model")

let service = {}

service.postcomment = (commentObj,category) => {
    return dbLayer.postcomment(commentObj,category).then((data) => {
        if (data) {
            return data
        } else {
            let err = new Error("Cannot Post")
            err.status = 404
            throw err
        }
    })
}

service.getComments =(category) =>{
    return dbLayer.getComments(category).then((data) =>{
        if (data) {
            return data
        } else {
            let err = new Error("Not Found")
            err.status = 404
            throw err
        }
    })
}

module.exports = service;