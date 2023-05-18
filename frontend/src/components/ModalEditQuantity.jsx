import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import { useDisclosure } from "@chakra-ui/react";

const ModalEditQuantity = ({product}) => {


  const { quantity  } = product;

  const [newQuantity, setNewQuantity] = useState(quantity);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { editQuantity } = useProducts();

  return (
    <>
      <Button size={"sm"} onClick={onOpen} colorScheme="blue">Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Quantity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NumberInput min={1} max={20} defaultValue={newQuantity} >
              <NumberInputField  />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => setNewQuantity(newQuantity + 1)} />
                <NumberDecrementStepper onClick={() => setNewQuantity(newQuantity - 1)} />
              </NumberInputStepper>
            </NumberInput>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose} >
              Close
            </Button>
            <Button colorScheme="blue" mr={3} onClick={() => {
            editQuantity(product, newQuantity)
            onClose()
            }
            } >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditQuantity;
