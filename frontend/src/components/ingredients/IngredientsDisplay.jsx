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
import IngredientCard from "./ingredientCard";
import { useSelector, useDispatch } from 'react-redux';
import { updateIngredients } from '../../context/userSlice.js';
import { v4 as uuidv4 } from 'uuid';

const IngredientsDisplay = () => {
  const ingredients = useSelector((state) => state.user.ingredients);
  const username = useSelector((state) => state.user.username);


  const dispatch = useDispatch();
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    quantity: 0,
    unit: '',
    notes: 'Added by User',
    uuid: uuidv4(),
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const saveIngredient = () => {
    const newIngredients = [...ingredients];

    if (isEditMode) {

      const index = ingredients.findIndex(ingredient => ingredient.uuid === editingId);
      if (index !== -1) {
        newIngredients[index] = newIngredient;
      }
      dispatch(updateIngredients({username:username, ingredients:{items:newIngredients}}));

    } else {
      console.log(newIngredients)
      newIngredients.push(newIngredient);
      dispatch(updateIngredients({username:username, ingredients:{items:newIngredients}}));
    }
    setNewIngredient({ name: '', quantity: 0, unit: '' });
    setIsEditMode(false);
    setEditingId(null);
    onClose();
  };

  const openAddModal = () => {
    setNewIngredient({ name: '', quantity: 0, unit: '' , notes:'Added by User', uuid: uuidv4() });
    setIsEditMode(false);
    setEditingId(null);
    onOpen();
  };

  const openEditModal = (ingredient) => {
    setNewIngredient({ name: ingredient.name, quantity: ingredient.quantity, unit: ingredient.unit, notes: ingredient.notes, uuid: ingredient.uuid});
    setEditingId(ingredient.uuid);
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
  
  const deleteIngredient = (uuid) => {
    const newIngredients = ingredients.filter(
      (ingredient) => ingredient.uuid !== uuid
    );
    dispatch(updateIngredients({username:username, ingredients:{items:newIngredients}}));
  };

  const clearIngredients = () => {
    const newIngredients = [];
    dispatch(updateIngredients({username:username, ingredients:{items: newIngredients}}));
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
              <HStack key={ingredient.uuid}>
                <IngredientCard
                  key={ingredient.uuid}
                  ingredient={ingredient}
                  id={ingredient.uuid}
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
