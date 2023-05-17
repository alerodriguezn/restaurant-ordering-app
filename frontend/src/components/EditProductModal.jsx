import { useEffect, useState } from "react";
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
import { MdUpdate } from "react-icons/md";
import { useDisclosure } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";

const EditProductModal = ({ product }) => {
  const { modifyProduct } = useProducts();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { code, name, description, price, image } = product;

  const [newCode, setNewCode] = useState();
  const [newName, setNewName] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newImage, setNewImage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await modifyProduct({
      code: newCode,
      name: newName,
      description: newDescription,
      price: newPrice,
      image: newImage,
    });
  };

  useEffect(() => {
    setNewCode(code);
    setNewName(name);
    setNewDescription(description);
    setNewPrice(price);
    setNewImage(image);
  }, [isOpen]);

  return (
    <>
      <Button
        className="mr-2"
        bg={"#6B46C1"}
        leftIcon={<MdUpdate />}
        color={"white"}
        iconSpacing={"1"}
        onClick={onOpen}
      >
        Update
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modify the Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Code</FormLabel>
              <Input
                placeholder="Code"
                onChange={(e) => setNewCode(e.target.value)}
                value={newCode}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Product Name"
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Product Description"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Product Price"
                onChange={(e) => setNewPrice(e.target.value)}
                value={newPrice}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input
                placeholder="Product Image (url)"
                onChange={(e) => setNewImage(e.target.value)}
                value={newImage}
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

export default EditProductModal;
