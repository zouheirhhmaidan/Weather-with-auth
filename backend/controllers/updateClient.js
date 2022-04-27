const ClientModel = require('../models/Client')

exports.updateUsers = async (req,res) => {
    const newAddress = req.body.newAddress
    const id = req.body.id
    console.log(newAddress, id)

    try {
        await ClientModel.findById(id, (error, clientToUpdate) =>{
            clientToUpdate.address = newAddress
            clientToUpdate.save()
            
        })
    } catch(err) {
        console.log(err)
    }

    res.send('updated')
}