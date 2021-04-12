import axios from "axios"

// Register User
export async function authUser({ username, email, password }) {
  try {
    const res = await axios.post("/api/users", {
      username,
      email,
      password,
    })
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export async function authUser({ email, password }) {
  try {
    const res = await axios.post("/api/users", {
      email,
      password,
    })
    return res.data
  } catch (err) {
    console.log(err)
  }
}
