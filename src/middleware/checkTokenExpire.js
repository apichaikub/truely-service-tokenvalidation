import { verifyToken } from '../helper/auth'
import { TOKEN_TYPE } from '../helper/enum'

export default async (req, res, next) => {
  const { BEARER } = TOKEN_TYPE.ENUM
  const { tokenType, accessToken } = req.body
  let error; let decoded

  if (tokenType === BEARER) {
    [error, decoded] = verifyToken(accessToken)
  }

  if (error) {
    res.status(401).fail('Invalid tokens')
  } else {
    req.user = decoded
    next()
  }
}
