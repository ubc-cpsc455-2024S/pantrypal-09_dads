import {
  VStack,
  Wrap,
  WrapItem,
  Heading,
  Box,
  HStack,
  Button,
  Divider,
  Stack,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

const PreferencePage = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
      <VStack alignItems="flex-start">
        {/* About Section */}
        <Stack spacing={5} my={6}>
          <Heading textAlign="center">About pantrypal</Heading>
          <Text fontSize="md" px={5}>
            Our app helps you reduce food waste by suggesting recipes based on
            what you already have in your fridge. Simply take a picture of your
            fridge or input your available ingredients, and let us do the rest.
          </Text>
        </Stack>

        {/* Features Section */}
        <Box my={10}>
          <Heading textAlign="center" mb={5}>
            Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center">
              <Image
                boxSize="50px"
                src="/recipe-icon.png"
                alt="Recipe Generation"
                mx="auto"
              />
              <Heading fontSize="xl" mt={5}>
                Recipe Generation
              </Heading>
              <Text mt={2}>
                Generate recipes based on your preferences and the ingredients
                you have.
              </Text>
            </Box>
            <Box textAlign="center">
              <Image
                boxSize="50px"
                src="/waste-icon.png"
                alt="Reduce Waste"
                mx="auto"
              />
              <Heading fontSize="xl" mt={5}>
                Reduce Waste
              </Heading>
              <Text mt={2}>
                Help reduce food waste by using what you already own.
              </Text>
            </Box>
            <Box textAlign="center">
              <Image
                boxSize="50px"
                src="/ingredients-icon.png"
                alt="Ingredient Tracking"
                mx="auto"
              />
              <Heading fontSize="xl" mt={5}>
                Ingredient Tracking
              </Heading>
              <Text mt={2}>Easily track and manage your ingredients.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default PreferencePage;
