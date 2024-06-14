import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: process.env.CLIENT_BASE_URL + "/login",
  }),
  function (req, res) {
    res.redirect(process.env.CLIENT_BASE_URL);
  }
);

//user is authenticated or not
router.get("/check", (req, res) => {
  //checkes for the authenticated user or not
  if (req.isAuthenticated()) {
    //send user
    res.send({ user: req.user });
  } else {
    // send nothing
    res.send({ user: null });
  }
  //based upon above value we showe the pages in frontend
});

//logout functionality
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.json({ message: "Logged out" });
  });
});

export default router;
