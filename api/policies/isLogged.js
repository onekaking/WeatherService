/**
 * Allow any authenticated user.
 */
module.exports = function (req, res, next) {

  // User is allowed, proceed to controller
  var is_auth = req.isAuthenticated()
  if (is_auth) res.redirect("/");
  // User is not allowed
  else next();
};
