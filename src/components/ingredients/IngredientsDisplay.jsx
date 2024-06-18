import React from 'react'
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
import { useState } from "react";


const IngredientsDisplay = ({ initialIngredients }) => {
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [newIngredient, setNewIngredient] = useState(
    {
      name: '',
      quantity: 0,
      unit: ''
    }
  );

  const { isOpen, onOpen, onClose } = useDisclosure()

  const saveIngredient = () => {
    setIngredients([...ingredients, newIngredient]);
    onClose();
  }
  
  const handleNewIngredientName = (event) => {
    setNewIngredient({...newIngredient, name: event.target.value});
  }
  
  const handleNewIngredientQuantity = (event) => {
    setNewIngredient({...newIngredient, quantity: event.target.value});
  }
  
  const handleNewIngredientUnit = (event) => {
    setNewIngredient({...newIngredient, unit: event.target.value});
  }
  
  const deleteIngredient = (index) => {
    setIngredients(currentIngredients => currentIngredients.filter((_, idx) => idx !== index));
  }
  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>

      {/* TODO: fix max-width of modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader alignSelf={'center'}>Ingredient info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <FormLabel>Name</FormLabel>
              <Input 
                onChange={handleNewIngredientName} 
                placeholder='Ingredient name' 
              />

              <FormLabel>Quantity</FormLabel>
              <Input 
                type="number"
                onChange={handleNewIngredientQuantity}
                placeholder='0' 
              />

              <FormLabel>Unit</FormLabel>
              <Select onChange={handleNewIngredientUnit} placeholder='Select unit'>
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
              Save Ingredient
            </Button>
          </ModalFooter>
        </ModalContent>

      </Modal>


      <VStack>
          <VStack spacing={'1rem'}>
              {ingredients.length !== 0?
                  (ingredients.map((ingredient, index) => {
                      return (
                        <HStack key={index}>
                          <IngredientCard key={index} ingredient={ingredient} index={index} onDelete={deleteIngredient}/>
                        </HStack>
                      )
                  })):null
              }
          </VStack>

          <Button onClick={onOpen}>
            Add Ingredient
          </Button>
      </VStack>
    </Box>
  )
}

export default IngredientsDisplay