import { Box, Heading, Text } from "@chakra-ui/react";

const OrderBox = ({order}) => {
  const { orderID, products, description, total } = order
  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        Order ID: {orderID.toLowerCase()}
      </Heading>
      <Text pt="2" fontSize="sm">
        Description: {description}
      </Text>
      <Text pt="2" fontSize="sm" fontWeight={"bold"}>
        Total: {total}
      </Text>
    </Box>
  );
};

export default OrderBox;
