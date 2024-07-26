import { useEffect }from 'react'
import { Box, VStack, Wrap, WrapItem, Heading, HStack, Button, Divider } from "@chakra-ui/react";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from '../context/recipeSlice';
import { useAuthContext } from '../hooks/useAuthContext';
import RecipeInstructions from '../components/Recipe/Recipe';

const Home = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const dispatch = useDispatch()
  const {user} = useAuthContext();

  useEffect(() => {
      dispatch(getRecipes(user));
  }, [dispatch, user]);


  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
        <Heading
            as="h1"
            fontSize="2rem"
            fontWeight="500"
            color="#333"
            marginBottom="1rem"
        >
          Saved Recipes
        </Heading>
        <VStack alignItems="flex-start">
            <Wrap alignItems={"center"}>
                {recipes.length > 0 ?
                    recipes.map((recipe) => (
                        <>
                            <WrapItem key={recipe.uuid}>
                                <RecipeInstructions recipe={recipe}/>
                            </WrapItem>
                        </>
                    )) : null
                }
            </Wrap>
            <Divider marginTop={'20px'} />
            <HStack direction='column' spacing={4}>
                <Button leftIcon={<IoFastFoodOutline />} variant='solid'>
                    Generate More
                </Button>
            </HStack>
        </VStack>
    </Box>
  )
}

export default Home