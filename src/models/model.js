const collection = require("../utilities/connection")

let model = {}

model.postcomment = (commentObj, category) => {
    commentObj.category = category
    return collection.getCommentCollection().then((collection) => {
        return collection.create(commentObj).then((data) => {
            if (data) {
                return true
            }
            else {
                return false
            }
        })
    })
}

model.getComments = (category) => {
    return collection.getCommentCollection().then((collection) => {
        return collection.find({ category : category },{ _id: 0 })
            .then((data) => {
                return data
            })
    })
}

module.exports = model
