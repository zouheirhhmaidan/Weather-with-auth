const ClientModel = require('../models/Client')

exports.deleteUser = async (req, res) => {

        const id = req.params.id
        await ClientModel.findByIdAndRemove(id).exec()
        res.send('deleted')
    
    
}