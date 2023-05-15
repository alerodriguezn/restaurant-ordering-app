import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
  Button,
} from "@chakra-ui/react";
import AdminNavbar from "../components/AdminNavbar";

const Products = () => {
  return (
    <Container maxW={"container.xl"}>
      <Card>
        <CardHeader>
          <Heading size="md">All Products</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
              <div className="mt-2">
                <Button className="mr-2" bg={"#2B6CB0"}>
                  Update
                </Button>
                <Button bg={"#C53030"}>Delete</Button>
              </div>
            </Box>

            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
              <div className="mt-2">
                <Button className="mr-2" bg={"#2B6CB0"}>
                  Update
                </Button>
                <Button bg={"#C53030"}>Delete</Button>
              </div>
            </Box>
            
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Products;
