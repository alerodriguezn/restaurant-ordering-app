
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Heading, FormControl, FormLabel, Input, Button, Link } from "@chakra-ui/react"
import ErrorAlert from "../components/ErrorAlert"
import axiosClient from "../config/axiosClient"
import useAuth from "../hooks/useAuth"


const Login = () => {

  const navigate = useNavigate()

  const { setAuth } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({})


  const handleSubmit = async (e) => {
    e.preventDefault()
    if ([email, password].includes("")) {
      setError({
        title: "All fields are required",
        descriptiregisteron: "Please fill all the fields"
      })
    };

    const user = { email, password }
    const { data } = await axiosClient.post('/users/login', user)

      
    try {
      localStorage.setItem('token', data.token)
      setAuth(data)
      console.log(data)

      navigate('/')
    } catch (error) {
      setError({
        title: "Incorrect credentials",
        description: error.response.data.msg
      })


    }

  }

  const { title, description } = error


  return (
    <Container maxW={"sm"} className="mt-5 md:mt-40 border-2 rounded-md p-10 border-teal-800 border-opacity-70">

      <Heading textAlign={"center"} >Login</Heading>

      {title && <ErrorAlert title={title} description={description} />}

      <form className="mt-4" onSubmit={handleSubmit}>
        <FormControl marginTop={"4"}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" borderColor={"#2D3748"} value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl marginTop={"4"}>
          <FormLabel>Password</FormLabel>
          <Input type="password" borderColor={"#2D3748"} value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>

        <Button className="btn btn-primary w-full mt-5" colorScheme="teal" type="submit" >Login</Button>
      </form>

      <nav className="mt-2 flex justify-between gap-2 text-sm">
        <Link>You don't have an account?</Link>
        <Link>Forgot Password?</Link>
      </nav>
    </Container>
  )
}

export default Login