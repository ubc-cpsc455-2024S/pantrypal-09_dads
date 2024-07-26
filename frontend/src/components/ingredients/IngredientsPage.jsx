import {
  VStack, 
  Heading, 
  HStack, 
  Button, 
  Divider, 
  Link, 
  Box,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsSkipForward } from "react-icons/bs";
import { generateRecipes } from "../../context/recipeSlice";
import IngredientsDisplay from "./IngredientsDisplay";

const InsertIngredientsPage = ({dispatch}) => {
  const username = useSelector((state) => state.user.username);


  
  const handleGenerate = async () => {
    dispatch(generateRecipes({username:username}))
};

  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>

      <Heading
        as="h1"
        fontSize="2rem"
        fontWeight="500"
        color="#333"
        marginBottom="1rem"
          >
          Identified Ingredients:
      </Heading>
      <Heading
               as="h3"
               fontSize="1rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                Make any necessary changes before generating recipes!
      </Heading>

      <IngredientsDisplay />


      <VStack>
        <Divider  marginTop={'20px'}/>
        <HStack direction='column' spacing={4}>
            <Button leftIcon={<IoFastFoodOutline/> } variant='solid' onClick={handleGenerate}>
              Generate Recipes!
            </Button>
            <Button variant='solid' onClick={handleContinue}>
              <BsSkipForward />
            </Button>
        </HStack>
      </VStack>
    </Box>
  );
}


export default InsertIngredientsPage
