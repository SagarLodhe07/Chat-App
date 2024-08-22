import express from 'express'
import { getMessage, sendMessage } from '../Controllers/messageController.js'
import { AuthRoute } from '../Middleware/authanticationRoute.js'

const messageRouter = express.Router()


messageRouter.get('/:id',AuthRoute,getMessage)
messageRouter.post('/send/:id',AuthRoute,sendMessage)


export default messageRouter