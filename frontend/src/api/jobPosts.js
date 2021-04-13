import axios from "axios"
import setAuthToken from "../utils/setAuthToken"

const url = "http://localhost:5000"

export async function getAllJobPosts() {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get(url + "/api/jobposts")
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export async function createJobPost(body) {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.post(url + "/api/jobposts", body)
    return res.data
  } catch (err) {
    console.log(err)
  }
}
