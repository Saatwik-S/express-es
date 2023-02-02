
import { Router } from 'express'
import userController from '../controllers/userController.js'
const router = Router()

router.route('/users').get(userController.getUser).post(userController.createUser)

export default router
