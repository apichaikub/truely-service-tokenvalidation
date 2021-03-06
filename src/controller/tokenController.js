/**
 * Token validation
 */
class userController {
  /**
   * @param {*} req
   * @param {*} res
   */
  verify(req, res) {
    try {
      // TODO: add service to cache access token, if we have compact logic or query data in db.
      res.success({
        userId: req.user.id || null,
        role: req.user.role || null,
        scopes: req.user.scopes || [],
      })
    } catch (error) {
      res.status(error.code || 500).fail(error.message)
    }
  }
}

export default new userController()
