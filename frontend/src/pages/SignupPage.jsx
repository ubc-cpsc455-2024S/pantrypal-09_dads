import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Stack,
  Text,
  SimpleGrid,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Hero from "../components/Hero";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <Grid
      display={{ base: "block", md: "grid" }}
      templateColumns="repeat(2, 1fr)"
      gap={6}
    >
      <GridItem colSpan={1}>
        <Flex direction="column">
          {/* Hero */}
          <Hero />
        </Flex>
      </GridItem>

      <GridItem colSpan={1}>
        <Flex direction="column">
          {/* Signup */}
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            my={5}
          >
            <form className="signup" onSubmit={handleSubmit}>
              <FormControl isInvalid={error}>
                <Heading>Sign Up</Heading>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <FormLabel mt={2}>Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <FormErrorMessage>{error}</FormErrorMessage>}
                <Button mt={5} disabled={isLoading} type="submit">
                  Sign up
                </Button>
              </FormControl>
            </form>
          </Box>

          {/* About Section */}
          <Stack spacing={5} my={6}>
            <Heading textAlign="center">About pantrypal</Heading>
            <Text fontSize="md" px={5}>
              Our app helps you reduce food waste by suggesting recipes based on
              what you already have in your fridge. Simply take a picture of
              your fridge or input your available ingredients, and let us do the
              rest.
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
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Signup;
