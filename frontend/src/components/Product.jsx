import React from "react";
import { Image } from "@chakra-ui/react";
import {Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, useToast} from "@chakra-ui/react";


const Product = () => {

  const toast = useToast()

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="./src/assets/hamb.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="2">
          <Heading size="md">Classic Hamburguer</Heading>
          <Text>
            Classic burguer, with cheese, lettuce, tomato, onion and pickles.
          </Text>
          <Text color="black.600" fontSize="2xl" fontWeight={"bold"}>
            $12.99
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
          <Button variant="solid" bg={"#FBBF24"}
          onClick={() =>
            toast({
              title: 'Product Added',
              description: "The product has been added to your cart.",
              status: 'success',
              duration: 5000,
              isClosable: true,
            })
          }
          >
            Add to cart
          </Button>
      </CardFooter>
    </Card>
  );
};

export default Product;
