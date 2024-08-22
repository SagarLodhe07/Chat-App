import express from 'express'
import { getAllUser } from '../Controllers/userController.js'
import { AuthRoute } from '../Middleware/authanticationRoute.js'

const router = express.Router()
router.get('/',AuthRoute,getAllUser)    


export default router