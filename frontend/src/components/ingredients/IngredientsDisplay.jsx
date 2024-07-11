import React, { useState } from 'react';
import {
  VStack, 
  Heading, 
  HStack, 
  Button, 
  Divider, 
  Link, 
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
  Select
} from "@chakra-ui/react";
import { IoFastFoodOutline } from "react-icons/io5";
import IngredientCard from "./ingredientCard";
import { useSelector, useDispatch } from 'react-redux';
import { addIngredient, removeIngredient, editIngredient, clearIngredients } from '../../slices/ingredientsSlice.js';

const IngredientsDisplay = () => {
  const ingredients = useSelector((state) => state.ingredients.items);
  const dispatch = useDispatch();
  const [newIngredient, setNewIngredient] = useState({
    name: '',
    quantity: 0,
    unit: ''
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const saveIngredient = () => {
    if (isEditMode) {
      dispatch(editIngredient({ ...newIngredient, id: editingId }));
    } else {
      dispatch(addIngredient(newIngredient));
    }
    setNewIngredient({ name: '', quantity: 0, unit: '' });
    setIsEditMode(false);
    setEditingId(null);
    onClose();
  };

  const openAddModal = () => {
    setNewIngredient({ name: '', quantity: 0, unit: '' });
    setIsEditMode(false);
    setEditingId(null);
    onOpen();
  };

  const openEditModal = (ingredient) => {
    setNewIngredient({ name: ingredient.name, quantity: ingredient.quantity, unit: ingredient.unit });
    setEditingId(ingredient.id);
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
  
  const deleteIngredient = (id) => {
    dispatch(removeIngredient(id));
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
        <VStack spacing={'1rem'}>
          {ingredients.length !== 0 ? (
            ingredients.map((ingredient) => (
              <HStack key={ingredient.id}>
                <IngredientCard
                  key={ingredient.id}
                  ingredient={ingredient}
                  id={ingredient.id}
                  onDelete={deleteIngredient}
                  onEdit={() => openEditModal(ingredient)}
                />
              </HStack>
            ))
          ) : null}
        </VStack>

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
