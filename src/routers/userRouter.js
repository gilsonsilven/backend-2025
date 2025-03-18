import express from 'express'
import getUser from '../controllers/user/getUser.js'
import createUser from '../controllers/user/createUser.js' 
import editUser from '../controllers/user/editUser.js'
import deleteUser from '../controllers/user/deleteUser.js'
import changeTypeUser from '../controllers/user/changeTypeUser.js'

const router = express.Router()

router.get('/:id', getUser)
router.post('/', createUser)
router.put('/', editUser)
router.delete('/', deleteUser)
router.patch('/type', changeTypeUser)


export default router