
const ClientModel = require('../models/Client')

exports.createUser = async (req, res) => {
    const client = req.body
    const newClient = new ClientModel(client)
    await newClient.save()
}