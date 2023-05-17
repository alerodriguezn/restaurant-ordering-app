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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import { useDisclosure } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

const DeleteProductModal = ({ product }) => {
  const { deleteProduct} = useProducts();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = async () => {
    deleteProduct(product)
  }

  return (
    <>
      <Button
        bg={"#C53030"}
        leftIcon={<MdDelete />}
        color={"white"}
        iconSpacing={"1"}
        onClick={onOpen}
      >
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Do you want to delete this product?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Alert status="error">
              <AlertIcon />
              After deleting the product you will not be able to recover the
              information
            </Alert>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="red"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteProductModal;
