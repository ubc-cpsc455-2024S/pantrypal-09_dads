import { useState } from "react";
import {
  VStack,
  Button,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  Select,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  useToast,
  HStack,
  Wrap,
  WrapItem,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import IngredientRow from "./ingredientRow.jsx";
import { updateIngredients } from "../../context/ingredientSlice.js";
import UploadIngredientsComponent from "./UploadIngredientsComponent.jsx";
import IngredientCard from "./ingredientCard.jsx";

const IngredientsDisplay = ({ ingredients, dispatch, user }) => {
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    quantity: 0,
    unit: "",
    notes: "Added by User",
    _id: null,
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Edit and Adding Ingredient Handling
  // =======================================================================================
  const saveIngredient = () => {
    const newIngredients = [...ingredients];

    if (isEditMode) {
      const index = ingredients.findIndex(
        (ingredient) => ingredient._id === editingId,
      );
      if (index !== -1) {
        newIngredients[index] = newIngredient;
      }
      dispatch(updateIngredients({ user: user, ingredients: newIngredients }));
    } else {
      newIngredients.push({
        name: newIngredient.name,
        quantity: newIngredient.quantity,
        unit: newIngredient.unit,
        notes: newIngredient.notes,
      });
      dispatch(updateIngredients({ user: user, ingredients: newIngredients }));
      toast({
        title: "Ingredient Added Successfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    }
    setNewIngredient({ name: "", quantity: 0, unit: "" });
    setIsEditMode(false);
    setEditingId(null);
    onClose();
  };

  const openAddModal = () => {
    setNewIngredient({
      name: "",
      quantity: 0,
      unit: "",
      notes: "Added by User",
      _id: null,
    });
    setIsEditMode(false);
    setEditingId(null);
    onOpen();
  };

  const openEditModal = (ingredient) => {
    setNewIngredient({
      name: ingredient.name,
      quantity: ingredient.quantity,
      unit: ingredient.unit,
      notes: ingredient.notes,
      _id: ingredient._id,
    });
    setEditingId(ingredient._id);
    setIsEditMode(true);
    onOpen();
  };

  const handleNewIngredientName = (event) => {
    setNewIngredient({ ...newIngredient, name: event.target.value });
  };

  const handleNewIngredientQuantity = (event) => {
    setNewIngredient({ ...newIngredient, quantity: event.target.value });
  };

  const handleNewIngredientUnit = (event) => {
    setNewIngredient({ ...newIngredient, unit: event.target.value });
  };

  const handleNewIngredientNotes = (event) => {
    setNewIngredient({ ...newIngredient, notes: event.target.value });
  };
  // =======================================================================================

  //Handling for deleting singular ingredients
  const deleteIngredient = (uuid) => {
    const newIngredients = ingredients.filter(
      (ingredient) => ingredient._id !== uuid,
    );

    dispatch(updateIngredients({ user: user, ingredients: newIngredients }));
    toast({
      title: "Deleted Ingredient",
      status: "warning",
      duration: 1500,
      isClosable: true,
    });
  };

  //Handling for clear ingredients
  const clearIngredients = () => {
    const newIngredients = [];
    dispatch(updateIngredients({ user: user, ingredients: newIngredients }));
    toast({
      title: "Cleared All Ingredients",
      status: "warning",
      duration: 1500,
      isClosable: true,
    });
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={{ base: "80%", md: "500px" }}>
          <ModalHeader alignSelf={"center"}>
            {isEditMode ? "Edit Ingredient" : "Add Ingredient"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Name</FormLabel>
            <Input
              value={newIngredient.name}
              onChange={handleNewIngredientName}
              placeholder="Ingredient name"
              marginBottom={"1em"}
            />
            <FormLabel>Quantity</FormLabel>
            <Input
              type="number"
              value={newIngredient.quantity}
              onChange={handleNewIngredientQuantity}
              marginBottom={"1em"}
            />
            <FormLabel>Unit</FormLabel>
            <Input
              value={newIngredient.unit}
              onChange={handleNewIngredientUnit}
              placeholder="Select unit"
              marginBottom={"1em"}
            />
            <FormLabel>Notes</FormLabel>
            <Input
              value={newIngredient.notes}
              onChange={handleNewIngredientNotes}
              placeholder="Ingredient Notes"
              marginBottom={"1em"}
            />
          </ModalBody>

          <ModalFooter alignSelf={"center"}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={saveIngredient} variant="ghost">
              {isEditMode ? "Update Ingredient" : "Save Ingredient"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <VStack w="100%">
        <Wrap spacing="15px" justify="center">
          {ingredients && ingredients.length !== 0
            ? ingredients.map((ingredient) => (
                <WrapItem key={ingredient._id}>
                  <IngredientCard
                    key={ingredient._id}
                    ingredient={ingredient}
                    id={ingredient._id}
                    onDelete={deleteIngredient}
                    onEdit={() => openEditModal(ingredient)}
                  />
                </WrapItem>
              ))
            : null}
        </Wrap>
        <Divider />
        <HStack>
          <Button onClick={openAddModal}>Add Ingredient</Button>
          <UploadIngredientsComponent dispatch={dispatch} />
        </HStack>
        <Button marginTop={"1em"} onClick={() => dispatch(clearIngredients())}>
          Clear All Ingredients
        </Button>
      </VStack>
    </Box>
  );
};

export default IngredientsDisplay;
