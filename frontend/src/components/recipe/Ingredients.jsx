import { Box, Checkbox, Divider, Heading, } from "@chakra-ui/react";

const Ingredients = ({missedIngredients, usedIngredients, equipment}) => {

  return (
    <Box paddingTop="20px" paddingBottom="15px">

        <Box display="flex" flexDirection="column" alignItems={'flex-start'}>
            <Heading size='sm' alignContent={'flex-start'} marginTop={'5px'} marginBottom={'5px'}>
                Ingredients
            </Heading>
            {usedIngredients.map((ingredient, index) => {
                return (
                    <Checkbox key={index} color="#0c5446" isChecked={true}>
                        {ingredient}
                    </Checkbox>
                )
            })}
            {missedIngredients.map((ingredient, index) => {
                return (
                    <Checkbox key={index} color="#0c5446">
                        {ingredient}
                    </Checkbox>
                )
            })}
        </Box>
        <Divider margin={'20px'}/>
        <Box display="flex" flexDirection="column" alignItems={'flex-start'}>
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
    </Box>
  );
};

export default Ingredients;