const ClientModel = require('../models/Client')

exports.getUsers = (req,res) => {
    ClientModel.findById({},{"token":1, "_id":0}, (err, result) => {
        if(err) {
            res.json(err)
        } else {
            console.log(result)
            res.json(result)
        }
    })
}