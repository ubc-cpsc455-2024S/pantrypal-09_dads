import { Box} from "@chakra-ui/react";
import { VStack, Wrap, WrapItem, Heading, HStack, Button, Divider} from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";

const data = {
    "recipes": [
        {
            "id": 1,
            "image": "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
            "title": "Spaghetti Carbonara",
            "readyInMinutes": 30,
            "calories": 500,
            "likes": 150,
            "time": "30 minutes"
        },
        {
            "id": 2,
            "image": "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
            "title": "Chicken Alfredo",
            "readyInMinutes": 45,
            "calories": 650,
            "likes": 200,
            "time": "45 minutes"
        },
        {
            "id": 3,
            "image": "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
            "title": "Caesar Salad",
            "readyInMinutes": 20,
            "calories": 300,
            "likes": 100,
            "time": "20 minutes"
        },
        {
            "id": 4,
            "image": "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
            "title": "Beef Tacos",
            "readyInMinutes": 25,
            "calories": 400,
            "likes": 180,
            "time": "25 minutes"
        },
        {
            "id": 5,
            "image": "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
            "title": "Vegetarian Pizza",
            "readyInMinutes": 35,
            "calories": 550,
            "likes": 220,
            "time": "35 minutes"
        }
    ]
}


const RecipePage = () => {

  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
        <VStack alignItems="flex-start">
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
                {data!==null?
                    (data.recipes.map((recipe, index) => {
                        return (
                            <WrapItem key={index}>
                                <RecipeCard 
                                    image={recipe.image}
                                    title={recipe.title}
                                    time={recipe.readyInMinutes}
                                    key={recipe.id}
                                    calories={recipe.calories}
                                    likes={recipe.likes}
                                    id={recipe.id}
                                    open={null}
                                    />
                            </WrapItem>
                        )
                    })):null
                }
            </Wrap>
            <Divider  marginTop={'20px'}/>
            <HStack direction='column' spacing={4}>
                <Button variant='solid'>
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