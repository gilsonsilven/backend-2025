import express from 'express'
import getProperty from '../controllers/property/getProperty.js'
import createProperty from '../controllers/property/createProperty.js'
import editProperty from '../controllers/property/editProperty.js'
import deleteProperty from '../controllers/property/deleteProperty.js'
import changeTypeProperty from '../controllers/property/changeTypeProperty.js'

const router = express.Router()

router.get('/list', getProperty)
router.get('/:id', () => {}) 
router.post('/', createProperty)
router.put('/:id', editProperty)
router.delete('/:id', deleteProperty)
router.patch('/type', changeTypeProperty)


export default router