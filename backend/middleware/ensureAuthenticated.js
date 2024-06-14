export async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  // if not autenticated redirect to login page
  res.redirect(process.env.CLIENT_BASE_URL + "/login");
}
