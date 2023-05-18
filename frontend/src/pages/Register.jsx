import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Heading,
  Button
} from "@chakra-ui/react";
import ErrorAlert from "../components/ErrorAlert";


const Register = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [error, setError] = useState({})



    const handleSubmit = async (e)  => {
        e.preventDefault()
        if ([nombre, email, password,repeatPassword].includes("")) {
            setError({
                title: "All fields are required",
                description: "Please fill all the fields"
            })
        };

        if (password !== repeatPassword) {
            setError({
                title: "Passwords don't match",
                description: "Please check your passwords"
            })
        };

        if (password.length < 6) {
            setError({
                title: "Password too short",
                description: "Please use a password with at least 6 characters"
            })
        }

        await register({nombre, email, password})


    }

    const { title,description  } = error


  return (
    <Container maxW={"sm"} className="mt-5 md:mt-20">

      <Heading textAlign={"center"}>Register</Heading>

      { title && <ErrorAlert title={title} description={description} />}

      <form className="mt-2" onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" borderColor={"#2D3748"} />
        </FormControl>
        <FormControl marginTop={"2"}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" borderColor={"#2D3748"} />
        </FormControl>
        <FormControl marginTop={"2"}>
          <FormLabel>Password</FormLabel>
          <Input type="password" borderColor={"#2D3748"} />
        </FormControl>
        <FormControl marginTop={"2"}>
          <FormLabel>Repeat Password</FormLabel>
          <Input type="password" borderColor={"#2D3748"} />
        </FormControl>

        <Button className="btn btn-primary w-full mt-5" colorScheme="teal" type="submit" >Register</Button>
      </form>

      <nav className="mt-2 flex justify-between gap-2 text-sm">
        <Link>You Already have an account?</Link>
        <Link>Forgot Password?</Link>
      </nav>
    </Container>
  );
};

export default Register;
