import express from 'express'
import { validatorToken } from '../middleware/validation'
import checkTokenExpire from '../middleware/checkTokenExpire'
import tokenController from '../controller/tokenController'

const router = express.Router()

router.post('/verify',
    (req, res, next) => {
      res.opeationName = 'postVerifyToken'
      next()
    },
    validatorToken,
    checkTokenExpire,
    tokenController.verify,
)

export default router
