const collection =require('../utilities/connection');

const commentDb = [
    {
        category :"",
        name :"",
        email :"",
        comment :""
    }
]

exports.setupDb = () => {
    return collection.getCommentCollection().then((data) =>{
        return data.deleteMany().then(() =>{
            return data.insertMany(commentDb).then((data) =>{
                if(data){
                    return "Successfully added"
                }
                else{
                    let err = new Error("The data cannot be inserted");
                    err.status=404;
                    throw err;
                }
            })
        })
    })
}