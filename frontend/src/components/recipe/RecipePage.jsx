import {useEffect} from 'react';
import { Box, VStack, Wrap, WrapItem, Heading, HStack, Button, Divider } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";
import Breadcrumbs from "../misc/BreadCrumbs";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { goToIngredients } from '../../context/userSlice';
import { getRecipes } from '../../context/recipesSlice';
import RecipeInstructions from './Recipe';

const RecipePage = ({dispatch}) => {
    const recipes = useSelector((state) => state.recipes.items);
    const username = useSelector((state) => state.user.username);

    const handleModifyIngredients = async () => {
        dispatch(goToIngredients())
    };

    useEffect(() => {
        dispatch(getRecipes(username));
    }, [dispatch, username]);

    return (
        
        <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
            <VStack alignItems="flex-start">
                <Breadcrumbs link={""} />
                <Heading
                    as="h1"
                    fontSize="2rem"
                    fontWeight="500"
                    color="#333"
                    marginBottom="1rem"
                >
                    Based on your available ingredients, you can make...
                </Heading>
                <Wrap alignItems={"center"}>
                    {recipes.length > 0 ?
                        recipes.map((recipe) => (
                            <>
                                <WrapItem key={recipe.uuid}>
                                    <RecipeInstructions recipe={recipe}>
                                    </RecipeInstructions>
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
                    <Button variant='outline' onClick={handleModifyIngredients}>
                        Modify ingredients
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default RecipePage;
