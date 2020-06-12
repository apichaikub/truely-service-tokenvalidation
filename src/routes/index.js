import express from 'express'
import token from './token'

const router = express.Router()

router.get('/', (req, res) => res.send('Service Validation Token'))
router.use(token)

export default router
