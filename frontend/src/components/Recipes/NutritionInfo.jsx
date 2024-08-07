import {
    Box,
    Stat,
    StatLabel,
    StatNumber,
    SimpleGrid,
  } from "@chakra-ui/react";
  
  // eslint-disable-next-line react/prop-types
  const NutritionInfo = ({ nutrition }) => {
    return (
      <SimpleGrid columns={2} spacing={4}>
        <Box>
          <Stat>
            <StatLabel>Calories</StatLabel>
            <StatNumber>{Math.round(nutrition.calories)} Cals</StatNumber>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatLabel>Fat</StatLabel>
            <StatNumber>{Math.round(nutrition.fat)} g</StatNumber>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatLabel>Carbs</StatLabel>
            <StatNumber>{Math.round(nutrition.carbs)} g</StatNumber>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatLabel>Protein</StatLabel>
            <StatNumber>{Math.round(nutrition.protein)} g</StatNumber>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatLabel>Sugar</StatLabel>
            <StatNumber>{Math.round(nutrition.sugar)} g</StatNumber>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatLabel>Sodium</StatLabel>
            <StatNumber>{Math.round(nutrition.sodium)} mg</StatNumber>
          </Stat>
        </Box>
      </SimpleGrid>
    );
  };
  
  export default NutritionInfo;  