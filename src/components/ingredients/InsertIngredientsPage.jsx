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
import IngredientsDisplay from "./IngredientsDisplay";



const InsertIngredientsPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState(
    {
      name: '',
      quantity: 0,
      unit: ''
    }
  );

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

      <Heading
        as="h1"
        fontSize="2rem"
        fontWeight="500"
        color="#333"
        marginBottom="1rem"
          >
          Insert your ingredients!
      </Heading>

      <IngredientsDisplay initialIngredients={[]} />


      <VStack>
        <Divider  marginTop={'20px'}/>
        <HStack direction='column' spacing={4}>
            <Button leftIcon={<IoFastFoodOutline />} variant='solid'>
              <Link href="/recipes"> Generate Recipes! </Link>
            </Button>
        </HStack>
      </VStack>
    </Box>
  );
}


export default InsertIngredientsPage
