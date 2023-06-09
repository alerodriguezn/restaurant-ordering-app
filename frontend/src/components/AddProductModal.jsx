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
import {MdAddCircle } from "react-icons/md";
import { useDisclosure } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";


const AddProductModal = ({ modalButtonText, product }) => {
  const { addProduct } = useProducts();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([code, name, description, price, image].includes("")) return;
    await addProduct({ code, name, description, price, image });

    setCode("");
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <>
      <Button
        className="mt-2"
        onClick={onOpen}
        color={"white"}
        bg={"#276749"}
        iconSpacing={"1"}
        leftIcon={<MdAddCircle size={18} />}
      >
        Add New Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Code</FormLabel>
              <Input
                placeholder="Code"
                onChange={(e) => setCode(e.target.value)}
                value={code}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Product Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Product Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Product Price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input
                placeholder="Product Image (url)"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="solid" colorScheme="purple" onClick={handleSubmit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProductModal;
