import { validator, getErrMsg } from '../helper/validator'
import { tokenRoles } from '../helper/validator/roles'

const validatorToken = (req, res, next) => {
  validator(req.body, tokenRoles.verify, (err) => {
    if (!!err) {
      res.status(400).fail(getErrMsg(err))
    } else {
      next()
    }
  })
}

export {
  validatorToken,
}
