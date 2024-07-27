import { Box, VStack, Button, Modal, Link, ModalOverlay, ModalContent, Flex} from "@chakra-ui/react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Header from "./Header";
import { useDisclosure } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";

// Replace with call to API to fetch Data


const RecipeComponent = ({recipe}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <Box>
      <Box onClick={onOpen}>
        <RecipeCard
            recipe={recipe}
        />
      </Box>
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent minW={'50%'}>
                <VStack w='100%' marginBottom={'2em'} marginTop={'2em'}>
                    <Header
                        recipe={recipe}
                    />
                    <Ingredients
                        usedIngredients={recipe.ingredients}
                        equipment={recipe.equipment}
                        key={1}
                    />

                    <Instructions
                        instructions={recipe.steps}
                        key={2}
                    />
                    <Flex w="100%" ml={"2em"} mt={"1em"}>
                        <Link  onClick={onClose}>I'm done making this recipe!</Link>
                    </Flex>
                </VStack>     
            </ModalContent>
        </Modal>   
    </Box>
  );
};

export default RecipeComponent;