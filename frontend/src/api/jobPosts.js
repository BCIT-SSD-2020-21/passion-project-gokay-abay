import axios from "axios"
import setAuthToken from "../utils/setAuthToken"

const url = "http://localhost:5000"

export async function getAllJobPosts() {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get(`${url}/api/jobposts`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export async function createJobPost(post) {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.post(`${url}/api/jobposts`, post)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export async function updateJobPost(post, postId) {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.put(`${url}/api/jobposts/${postId}`, post)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export async function deleteJobPost(postId) {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.delete(`${url}/api/jobposts/${postId}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}
