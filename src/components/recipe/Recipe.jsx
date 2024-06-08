import { Box, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Header from "./Header";

// Replace with call to API to fetch Data
const recipeList = [
    {
        "id": 652591,
        "title": "Mummy Meatballs with Spaghetti",
        "image": "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-NIGMEATBALLS2/05COOKING-NIGMEATBALLS2-superJumbo.jpg",
        "usedIngredientCount": 4,
        "missedIngredientCount": 6,
        "missedIngredients": [
            "1/2 cup soft bread crumbs",
            "1 large egg",
            "2 teaspoons garlic paste",
            "1 teaspoon Italian seasoning",
            "1/4 cup grated Parmesan cheese",
            "pimiento stuffed green olives"
        ],
        "usedIngredients": [
            "1 pound lean ground beef",
            "cooked spaghetti noodles or other cooked pasta",
            "1 quart marinara sauce or spaghetti sauce",
            "cooked wide rice noodles or extra wide egg noodles"
        ],
        "unusedIngredients": [
            "Chicken",
            "plums"
        ],
        "likes": 2,
        "servings": 16,
        "readyInMinutes": 45,
        "vegetarian": false,
        "calories": 330.164375,
        "instructions": [
            "Mix together ingredients for meatballs in a bowl.Preheat oven to 350F.Grease an 8 hole muffin tin.Use an ice cream scoop to divide out meatball mix and drop into muffin pan.",
            "Bake meatballs, for 35 minutes or until inside reaches 160F on an instant read thermometer.",
            "Drain meatballs on a cookie rack.",
            "Heat marinara sauce and cook spaghetti and rice noodles (separately) according to package directions.",
            "Drain pasta, keep spaghetti warm and cool rice noodles in cold water then drain.Slice meatballs in half horizontally to make two pieces, each with a flat surface.Pat rice noodles dry with paper toweling and layer over the top of the meatball, tucking sliced olives in for eyes.It is best to let the meatballs sit still for about 15 minutes so they become more tacky and hold together better.But since they will get cold, microwave them on a microwave-safe plate for a minute, then carefully place a mummy meatball onto a nest of sauced spaghetti and serve."
        ],
        "equipment": [
            "ice cream scoop",
            "kitchen thermometer",
            "muffin tray",
            "microwave",
            "oven",
            "bowl"
        ]
    }
]

const RecipeInstructions = () => {


  return (
    <Box>
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Recipes</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>{recipeList[0].title}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <VStack w='100%'> 
          
            <Header
                title={recipeList[0].title}
                image={recipeList[0].image}
                time={recipeList[0].readyInMinutes}
                calories={recipeList[0].calories}
                likes={recipeList[0].likes}
                servings = {recipeList[0].servings}
            />
            <Ingredients
                missedIngredients={recipeList[0].missedIngredients}
                usedIngredients={recipeList[0].usedIngredients}
                equipment={recipeList[0].equipment}
                key={1}
            />

            <Instructions
                instructions={recipeList[0].instructions}
                key={2}
            />
        </VStack>        
    </Box>
  );
};

export default RecipeInstructions;