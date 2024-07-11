import React from 'react';
import { Box, VStack, Wrap, WrapItem, Heading, HStack, Button, Divider } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";
import Breadcrumbs from "../BreadCrumbs";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

const RecipePage = () => {
    const recipes = useSelector((state) => state.recipes.items);

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
                            <WrapItem key={recipe._id}>
                                <RecipeCard
                                    image={recipe.image}
                                    title={recipe.name}
                                    time={recipe.time}
                                    calories={recipe.nutrition.calories}
                                    likes={recipe.ratings[0].rating}
                                    id={recipe.id}
                                    open={null}
                                />
                            </WrapItem>
                        )) : null
                    }
                </Wrap>
                <Divider marginTop={'20px'} />
                <HStack direction='column' spacing={4}>
                    <Button leftIcon={<IoFastFoodOutline />} variant='solid'>
                        Generate More
                    </Button>
                    <Button variant='outline'>
                        Modify ingredients
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default RecipePage;
