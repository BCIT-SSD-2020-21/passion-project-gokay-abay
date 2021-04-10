const express = require("express")
const router = express.Router()
const auth = require("../../middleware/auth")
const JobPost = require("../../models/JobPost")

// @route   GET api/posts
// @desc    Get current user job posts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const post = await JobPost.findOne({ user: req.user.id }).populate("user", [
      "name",
    ])
    if (!post) {
      return res.status(400).json({ msg: "There is no post for this user" })
    }
    res.json(post)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

module.exports = router
