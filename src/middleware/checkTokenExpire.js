import { verifyToken } from '../helper/auth'

export default async (req, res, next) => {
  const { tokenType, accessToken } = req.body
  let error; let decoded

  if (tokenType === 'Bearer') {
    [error, decoded] = verifyToken(accessToken)
  }

  if (error) {
    res.status(401).fail('Invalid tokens')
  } else {
    req.user = decoded
    next()
  }
}
