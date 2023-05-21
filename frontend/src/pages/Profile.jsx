import { Container, Heading, Card, CardHeader, CardBody, Stack, StackDivider, Text, Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import useAuth from "../hooks/useAuth"

const Profile = () => {

    const { auth } = useAuth()
    const { name, email } = auth


    return (
        <>
            <Navbar />
            <Container maxW={"xl"}>
                <Card>
                    <CardHeader>
                        <Heading size='md'>Profile</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Your Name
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    {name}
                                </Text>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Email
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    {email}
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>


            </Container>


        </>
    )
}

export default Profile