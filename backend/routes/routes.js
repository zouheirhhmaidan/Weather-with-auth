const express = require('express')
const createClients  = require('../controllers/createClients')
const getClients  = require('../controllers/getClients')
const deleteClient  = require('../controllers/deleteClient')
const updateClient  = require('../controllers/updateClient')
const ClientModel  = require('../models/Client')
const bcrypt = require('bcrypt')
const joi = require('joi')
const router = express.Router()
const authController = require('../controllers/authController')
const genAuthToken = require('../utils/genAuthToken/genAuthToken')
// const router = express.Router()
// async function client(router)  {
    router.post('/createClient', createClients.createUser)
    router.get('/getClients', getClients.getUsers)
    router.delete('/deleteClient/:id', deleteClient.deleteUser)
    router.put('/updateClient', updateClient.updateUsers)
    router.get('/signup', authController.signup_get)
    router.post('/signup', authController.signup_post)
    router.get('/login', authController.login_get)
    router.post('/login', authController.login_post)

    router.post('/create', async (req,res) => {
        const Schema = joi.object({
            email: joi.string().min(3).max(30).required().email(),
            password: joi.string().min(6).max(20).required(),
            token: joi.string()
        })

        const {error} = Schema.validate(req.body)
        console.log("erorrrrrrrr",error)

        if(error) return res.status(400).send(error.details[0].message)

        let user = await ClientModel.findOne({email: req.body.email})

        if(user) return res.status(400).send('user exists')


        user = new ClientModel({
            email: req.body.email,
            password: req.body.password,
            
        })

        
        const token = genAuthToken(user)

        const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(user.password, salt)

            user= new ClientModel({
                email: req.body.email,
            password: req.body.password,
            token :token
            })
            
       user = await user.save()
       
       res.send(token)

       
    })

    router.post('/loginz', async (req,res) => {
        const Schema = joi.object({
            email: joi.string().min(3).max(200).required().email(),
            password: joi.string().min(6).max(200).required(),
            token: joi.string()
        })

        const {error} = Schema.validate(req.body)

        if(error) return res.status(400).send(error.details[0].message)

        let user = await ClientModel.findOne({ email: req.body.email })

        if (!user) return res.status(400).send('invalid credentials')

        const isValid = await bcrypt.compare(req.body.password, user.password)

       try {
         await ClientModel.find(req.body.email && req.body.password)
       } catch(err) {
           console.log(err)
       }
        
          
    })
   
module.exports = router

