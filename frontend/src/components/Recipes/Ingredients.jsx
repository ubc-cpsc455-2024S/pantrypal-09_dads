import { Box, Checkbox, Divider, Heading,HStack } from "@chakra-ui/react";

const Ingredients = ({usedIngredients, equipment}) => {

  return (
    <HStack paddingTop="20px" paddingBottom="15px" flexDirection={'row'}>
        <Box display="flex" flexDirection="column" alignItems={'flex-start'} alignContent={'flex-start'}>
            <Heading size='sm' alignContent={'flex-start'} marginTop={'5px'} marginBottom={'5px'}>
                Ingredients
            </Heading>
            {usedIngredients.map((ingredient, index) => {
                return (
                    <Checkbox key={index} color="#0c5446">
                        {ingredient.quantity + " " + ingredient.unit + " of " + ingredient.name}
                    </Checkbox>
                )
            })}
        </Box>
        <Divider  margin={'20px'} orientation='vertical'/>
        <Box display="flex" flexDirection="column" alignItems={'flex-start'} alignContent={'flex-start'}>
            <Heading size='sm' alignContent={'flex-start'} marginTop={'5px'} marginBottom={'5px'}>
                Equipment
            </Heading>
            {equipment.map((tool, index) => {
                return (
                    <Checkbox key={index} color="#0c5446">
                        {tool}
                    </Checkbox>
                )
            })}
        </Box>
    </HStack>
  );
};

export default Ingredients;