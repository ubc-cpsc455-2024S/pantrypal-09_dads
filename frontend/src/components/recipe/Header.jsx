import { HStack, VStack, StackDivider, Heading, Image, Center, Text} from "@chakra-ui/react";

const Header = ({title, image, time, calories, servings, likes}) => {

  return (
    <>
      <Center>
            <VStack>
                
                <Heading alignContent={'flex-start'} marginTop={'5px'} marginBottom={'5px'} size="xl" fontWeight="400" letterSpacing={'tighter'}>
                    {title}
                </Heading>
                <HStack divider={<StackDivider />}>
                    <Text fontSize="14px" lineHeight="20px" fontWeight="400">
                        {time + " mins"}
                    </Text>
                    <Text fontSize="14px" lineHeight="20px" fontWeight="400">
                        {Math.round(calories) + " Cals per serving"}
                    </Text>
                    <Text fontSize="14px" lineHeight="20px" fontWeight="400">
                        {"Feeds "+ servings}
                    </Text>
                    <Text fontSize="14px" lineHeight="20px" fontWeight="400">
                        {"♥️ "+ likes}
                    </Text>
                </HStack>
                <Image src={image}
                    style={{
                        width: "60%",
                        borderRadius: "10px"
                    }}
                />
                
            </VStack>
        </Center>
    </>
  );
};

export default Header;