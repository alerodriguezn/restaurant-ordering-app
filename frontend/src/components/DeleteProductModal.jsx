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
  AlertIcon
} from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";

const DeleteProductModal = ({ isOpen, onClose }) => {

  const { deleteProduct } = useProducts();  

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
          Do you want to delete this product?
          </ModalHeader>
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
            <Button colorScheme="red" onClick={deleteProduct}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteProductModal;
