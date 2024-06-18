import { VStack, Wrap, WrapItem, Heading, HStack, Button, Divider, Link, Box} from "@chakra-ui/react";
import { IoFastFoodOutline } from "react-icons/io5";
import IngredientCard from "./ingredientCard";
import IngredientsDisplay from "./IngredientsDisplay";

//Replace with Redux Store
const data = {
  "ingredients": [
    {
      "name": "Flour",
      "quantity": 2,
      "unit": "cups",
      "notes": "All-purpose flour"
    },
    {
      "name": "Sugar",
      "quantity": 1,
      "unit": "cup",
      "notes": "Granulated white sugar"
    },
    {
      "name": "Butter",
      "quantity": 0.5,
      "unit": "cup",
      "notes": "Unsalted, melted"
    },
    {
      "name": "Eggs",
      "quantity": 2,
      "unit": "pieces",
      "notes": "Large"
    },
    {
      "name": "Baking Powder",
      "quantity": 1,
      "unit": "teaspoon",
      "notes": ""
    },
    {
      "name": "Salt",
      "quantity": 0.5,
      "unit": "teaspoon",
      "notes": ""
    },
    {
      "name": "Vanilla Extract",
      "quantity": 1,
      "unit": "teaspoon",
      "notes": "Pure vanilla extract"
    },
    {
      "name": "Milk",
      "quantity": 1,
      "unit": "cup",
      "notes": "Whole milk"
    }
  ]
}


const IngredientsPage = () => {

  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
        <VStack alignItems="flex-start">
            <Heading
               as="h1"
               fontSize="2rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                Here are the ingredients we have identified:
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
            
            <IngredientsDisplay initialIngredients={data.ingredients} />
            
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


export default IngredientsPage
