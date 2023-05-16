import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Button,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";

const AddProductModal = ({ isOpen, onClose }) => {

    const { addProduct } = useProducts();

    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Va bien!!!")
    if([code, name, description, price, image].includes("")) return;

    await addProduct({code, name, description, price, image})

    setCode("");
    setName("");
    setDescription("");
    setPrice("");
    setImage("");


  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Code</FormLabel>
              <Input placeholder="Code" onChange={(e) => setCode(e.target.value)} value={code} />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Product Name" onChange={(e) => setName(e.target.value)} value={name}  />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder="Product Description" onChange={(e) => setDescription(e.target.value)} value={description} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder="Product Price" onChange={(e) => setPrice(e.target.value)} value={price}  />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input placeholder="Product Image (url)" onChange={(e) => setImage(e.target.value)} value={image} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="solid" onClick={handleSubmit}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProductModal;
