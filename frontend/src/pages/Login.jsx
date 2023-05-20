import { Container, Heading, FormControl, FormLabel, Input, Button, Link } from "@chakra-ui/react"
import ErrorAlert from "../components/ErrorAlert"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e)  => {
        e.preventDefault()
        if ([ email, password].includes("")) {
            setError({
                title: "All fields are required",
                description: "Please fill all the fields"
            })
        };

      
        await register({nombre, email, password})


    }

    const { title,description  } = error


  return (
    <Container maxW={"sm"} className="mt-5 md:mt-20">

      <Heading textAlign={"center"}>Login</Heading>

      { title && <ErrorAlert title={title} description={description} />}

      <form className="mt-2" onSubmit={handleSubmit}>
        <FormControl marginTop={"2"}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" borderColor={"#2D3748"} />
        </FormControl>
        <FormControl marginTop={"2"}>
          <FormLabel>Password</FormLabel>
          <Input type="password" borderColor={"#2D3748"} />
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