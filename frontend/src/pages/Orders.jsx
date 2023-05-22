import { useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";
import Navbar from "../components/Navbar";
import {
  Container,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import OrderBox from "../components/OrderBox";

const Orders = () => {
  const { auth } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersById = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };


        const { data }  = await axiosClient.get(`/orders/${auth._id}`, config);
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

    getOrdersById();
  }, [auth]);

  return (
    <>

      <Container maxW={"xl"}>
        <Card>
          <CardHeader>
            <Heading size="md">Your Orders</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {orders?.map((order) => (
                <OrderBox key={order._id} order={order} />
              ))}
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Orders;
