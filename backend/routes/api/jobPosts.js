const express = require("express")
const router = express.Router()
const auth = require("../../middleware/auth")
const { check, validationResult } = require("express-validator/")
const JobPost = require("../../models/JobPost")

// @route   GET api/jobposts
// @desc    Get current user job posts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const post = await JobPost.find({ user: req.user.id }).populate("user", [
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

// @route   POST api/jobposts
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

// @route   GET api/jobposts/id
// @desc    Get post by Id
// @access  Private
router.get("/:id", auth, async (req, res) => {
  const postId = req.params.id

  try {
    const post = await JobPost.findById(postId)
    if (!post) {
      return res.status(400).send({ msg: "Post not found" })
    }
    res.json(post)
  } catch (err) {
    console.error(err.message)
    res.status(500).send({ msg: "Server error" })
  }
})

// @route   PUT api/jobposts/id
// @desc    Update post by Id
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const postId = req.params.id
  try {
    const post = await JobPost.findByIdAndUpdate(
      { _id: postId },
      { $set: req.body },
      { new: true }
    )

    if (!post) {
      return res.status(400).send({ msg: "Post not found" })
    }

    res.json(post)
  } catch (err) {
    console.error(err.message)
    res.status(500).send({ msg: "Server error" })
  }
})

// @route   DELETE api/jobposts/id
// @desc    Delete post by Id
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  const postId = req.params.id

  try {
    const post = await JobPost.findById(postId)

    if (!post) {
      return res.status(400).send({ msg: "Post not found" })
    }

    await post.remove()
    res.json(post)
  } catch (err) {
    console.error(err.message)
    res.status(500).send({ msg: "Server error" })
  }
})

module.exports = router
