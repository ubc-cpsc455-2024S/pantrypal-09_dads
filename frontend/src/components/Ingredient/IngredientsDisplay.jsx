import { useState } from 'react';
import {
  VStack, 
  HStack, 
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
  SimpleGrid
} from "@chakra-ui/react";
import IngredientCard from "./ingredientCard.jsx";
import { updateIngredients } from '../../context/ingredientSlice.js';
import { v4 as uuidv4 } from 'uuid';

const IngredientsDisplay = ({ingredients, dispatch, user}) => {
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    quantity: 0,
    unit: '',
    notes: 'Added by User',
    _id: null
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Edit and Adding Ingredient Handling
  // =======================================================================================
  const saveIngredient = () => {
    const newIngredients = [...ingredients];

    if (isEditMode) {

      const index = ingredients.findIndex(ingredient => ingredient._id === editingId);
      if (index !== -1) {
        newIngredients[index] = newIngredient;
      }
      dispatch(updateIngredients({user:user, ingredients:newIngredients}));

    } else {
      newIngredients.push({name: newIngredient.name, quantity: newIngredient.quantity, unit: newIngredient.unit, notes: newIngredient.notes});
      dispatch(updateIngredients({user:user, ingredients:newIngredients}));
    }
    setNewIngredient({ name: '', quantity: 0, unit: '' });
    setIsEditMode(false);
    setEditingId(null);
    onClose();
  };

  const openAddModal = () => {
    setNewIngredient({ name: '', quantity: 0, unit: '' , notes:'Added by User', _id: null });
    setIsEditMode(false);
    setEditingId(null);
    onOpen();
  };

  const openEditModal = (ingredient) => {
    setNewIngredient({ name: ingredient.name, quantity: ingredient.quantity, unit: ingredient.unit, notes: ingredient.notes, _id: ingredient._id});
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
  // =======================================================================================

  //Handling for deleting singular ingredients
  const deleteIngredient = (uuid) => {
    const newIngredients = ingredients.filter(
      (ingredient) => ingredient._id !== uuid
    );

    dispatch(updateIngredients({user:user, ingredients:newIngredients}));
  };

  //Handling for clear ingredients
  const clearIngredients = () => {
    const newIngredients = [];
    dispatch(updateIngredients({user:user, ingredients:newIngredients}));
  };

  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={'center'}>{isEditMode ? 'Edit Ingredient' : 'Add Ingredient'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Name</FormLabel>
            <Input 
              value={newIngredient.name}
              onChange={handleNewIngredientName} 
              placeholder='Ingredient name' 
            />

            <FormLabel>Quantity</FormLabel>
            <Input 
              type="number"
              value={newIngredient.quantity}
              onChange={handleNewIngredientQuantity}
              placeholder='0' 
            />

            <FormLabel>Unit</FormLabel>
            <Select value={newIngredient.unit} onChange={handleNewIngredientUnit} placeholder='Select unit'>
              <option value="grams">Grams</option>
              <option value="cups">Cups</option>
              <option value="ml">Milliliters (ml)</option>
              <option value="liters">Liters</option>
              <option value="tablespoons">Tablespoons</option>
              <option value="teaspoons">Teaspoons</option>
              <option value="ounces">Ounces</option>
              <option value="pounds">Pounds</option>
              <option value="kilograms">Kilograms</option>
            </Select>
          </ModalBody>

          <ModalFooter alignSelf={'center'}>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={saveIngredient} variant='ghost'>
              {isEditMode ? 'Update Ingredient' : 'Save Ingredient'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <VStack>
        <SimpleGrid spacing={4} templateColumns='repeat(4, minmax(200px, 1fr))'>
          {ingredients && ingredients.length !== 0 ? (
            ingredients.map((ingredient) => (
              <HStack key={ingredient._id}>
                <IngredientCard
                  key={ingredient._id}
                  ingredient={ingredient}
                  id={ingredient._id}
                  onDelete={deleteIngredient}
                  onEdit={() => openEditModal(ingredient)}
                />
              </HStack>
            ))
          ) : null}
        </SimpleGrid>

        <Button onClick={openAddModal}>
          Add Ingredient
        </Button>
        <Button onClick={ () => dispatch(clearIngredients())}>
          Clear All Ingredients
        </Button>
      </VStack>
    </Box>
  );
};

export default IngredientsDisplay;
