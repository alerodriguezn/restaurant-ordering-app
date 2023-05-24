import { useEffect, useState } from "react"
import axiosClient from "../config/axiosClient"
import { Container } from "@chakra-ui/react"
import { Card, CardBody, CardHeader, Divider, Heading, Stack, StackDivider } from "@chakra-ui/react"
import OrderBox from "../components/OrderBox"

const Admin = () => {

  const [ orders, setOrders ] = useState([])


  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axiosClient.get('/orders/allOrders', config)
        setOrders(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    getAllOrders()
  }, [])



  return (
    <Container maxW={"xl"}>
      <Card>
        <CardHeader paddingBottom={1}>
          <Heading size="md">Pending Orders</Heading>
        </CardHeader>

        <Divider marginTop={"2"} color={"gray.300"} />

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {orders.length ? (
              orders.map((order) => (
                <OrderBox key={order._id} order={order} />
              ))
            ) : (
              <p>No pending orders at the moment</p>
            )}
          </Stack>
        </CardBody>
      </Card>
    
    
    </Container>
  )
}

export default Admin