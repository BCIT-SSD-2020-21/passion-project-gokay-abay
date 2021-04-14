import axios from "axios"
const url = "http://localhost:5000"

// Register User
export async function registerUser({ name, email, password }) {
  try {
    const res = await axios.post(`${url}/api/users`, {
      name: name,
      email: email,
      password: password,
    })
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export async function authUser({ email, password }) {
  try {
    const res = await axios.post(`${url}/api/auth`, {
      email: email,
      password: password,
    })
    return res.data
  } catch (err) {
    console.log(err)
  }
}
