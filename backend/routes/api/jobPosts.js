const express = require("express")
const router = express.Router()
const auth = require("../../middleware/auth")
const { check, validationResult } = require("express-validator/")
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

// @route   POST api/posts
// @desc    Create a job post entry
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Job title is required").not().isEmpty(),
      check("company", "Company name is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      //   let newPost = await JobPost.findOne({ user: req.user.id })

      //   if (newPost) {
      //     newPost = await JobPost.findOneAndUpdate(
      //       { user: req.user.id },
      //       { $set: req.body },
      //       { new: true }
      //     )
      //     return res.json(newPost)
      //   }

      const postObj = req.body
      let newPost = new JobPost({ ...postObj, user: req.user.id })
      await newPost.save()
      res.json(newPost)
    } catch (err) {
      console.error(err.message)
      res.status(500).send("Server error")
    }
  }
)

module.exports = router
