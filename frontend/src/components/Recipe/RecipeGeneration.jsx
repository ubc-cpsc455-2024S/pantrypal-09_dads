import { Box, VStack, Button, Modal, ModalBody, ModalOverlay, ModalContent, Wrap, WrapItem, Heading, Divider,Textarea, HStack, Select, Center} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { generateRecipes, setLoading } from "../../context/recipeSlice";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import SuggestedRecipeComponent from "./SuggestedRecipeComponent";
import { addRecipe } from "../../context/recipeSlice";
import { deleteSuggestedRecipe } from "../../context/recipeSlice";

const RecipeGeneration = ({dispatch}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const suggestedRecipes = useSelector((state) => state.recipe.suggestedRecipes);
    const loading = useSelector((state) => state.recipe.loading);
    const {user} = useAuthContext();
    const [generator, setGenerator] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch(setLoading(true))
      dispatch(generateRecipes({user:user,prompt:generator}))
    }

    const onChoose = (index) => {
        let newRecipes = [...suggestedRecipes]
        newRecipes.splice(parseInt(index), 1)
        dispatch(deleteSuggestedRecipe(newRecipes))
        dispatch(addRecipe({user:user,recipe:suggestedRecipes[index]}))
    }

    const onDelete = (index) => {
        let newRecipes = [...suggestedRecipes]
        newRecipes.splice(parseInt(index), 1)
        dispatch(deleteSuggestedRecipe(newRecipes))
    }

    useEffect(() => {
    }, [dispatch, suggestedRecipes]);

    return (
    <Box>
        <Button leftIcon={<IoFastFoodOutline />} variant='solid' onClick={onOpen}>
            Generate More
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent minW={'70%'}>
                <ModalBody>
                {/* Generate recipe prompt*/}
                <Box display={"flex"} flexDirection={"column"} m={"8%"} alignItems="flex-start">
                    <Heading
                        as="h1"
                        fontSize="2rem"
                        fontWeight="500"
                        color="#333"
                        marginBottom="1rem"
                    >
                    Generate Recipes
                    </Heading>
                    <VStack alignItems="flex-start">
                        <Heading
                        as="h3"
                        fontSize="1rem"
                        fontWeight="500"
                        color="#333"
                        >
                            {"If you have any specific requests for what recipes to generate,  include them here!"}
                        </Heading>
                        <form onSubmit={handleSubmit}>
                            <Textarea type='preferences' id="preferences" value={generator} minW={'500px'} onChange={(e) => setGenerator(e.target.value)} />
                            <HStack alignItems={'flex-center'}mt={5} >
                                <Button mr={5} type="submit" disabled={loading}>Generate</Button>
                                <Select placeholder='Select LLM'>
                                    <option value='option1'>GPT 4o</option>
                                    <option value='option2'>Claude 3.5 Sonnet</option>
                                </Select>
                            </HStack>
                        </form>
                    </VStack>
                    <Divider margin={'20px'} />
                    {/* Loading*/}
                    {loading?<Loading/>:null}
                    {/* Generated recipes*/}
                    {suggestedRecipes.length > 0 ? (
                        <Heading
                            as="h1"
                            fontSize="2rem"
                            fontWeight="500"
                            color="#333"
                            marginBottom="1rem"
                        >
                        Generated Recipes
                        </Heading>
                    ) : null}
                    <VStack alignItems="flex-start">
                        <Wrap alignItems={"center"}>
                            {suggestedRecipes.length > 0 ?
                                suggestedRecipes.map((recipe, index) => (
                                    <>
                                        <WrapItem key={index}>
                                            <SuggestedRecipeComponent recipe={recipe} index={index} onChoose={onChoose} onDelete={onDelete}/>
                                        </WrapItem>
                                    </>
                                )) : null
                            }
                        </Wrap>
                        {/* <Divider marginTop={'20px'} />
                        <HStack direction='column' spacing={4}>
                            <RecipeGeneration dispatch={dispatch}/>
                        </HStack> */}
                    </VStack>
                </Box>   
                </ModalBody>
            </ModalContent>
        </Modal>   
    </Box>
  );
};

export default RecipeGeneration;