import { Box, Heading, Text, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="2rem"
    >
      <Heading
        as="h1"
        fontSize="3rem"
        fontWeight="bold"
        color="#333"
        marginBottom="1rem"
      >
        Simplify Your Cooking, Minimize Food Waste
      </Heading>
      <Text fontSize="1.5rem" color="#666" marginBottom="2rem">
        Discover recipes based on what's in your fridge. No more wasted food,
        just delicious meals.
      </Text>
      <Image maxWidth="600px" src="/open_fridge.jpeg" alt="PantryPals" />
    </Box>
  );
};

export default Hero;
