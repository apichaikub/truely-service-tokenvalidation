import { verifyToken } from '../helper/auth'

export default async (req, res, next) => {
  const [error, decoded] = verifyToken(req.body.access_token)

  if (error) {
    res.status(401).fail('Invalid tokens')
  } else {
    req.user = decoded
    next()
  }
}
