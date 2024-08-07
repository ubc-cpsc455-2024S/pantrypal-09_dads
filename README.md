# Group 09 - PantryPal

[![Test and Deploy](https://github.com/ubc-cpsc455-2024S/pantrypal-09_dads/actions/workflows/test_and_deploy.yaml/badge.svg?event=push)](https://github.com/ubc-cpsc455-2024S/pantrypal-09_dads/actions/workflows/test_and_deploy.yaml)

## Project Description

Transform your cooking experience with PantryPal, the ultimate app for home cooks, foodies, and anyone looking to whip up delicious dishes with ease. Snap a photo of your fridge contents, and let our AI-powered app identify your ingredients and suggest mouth-watering recipes tailored just for you. Say goodbye to the daily "What's for dinner?" dilemma and hello to personalized, hassle-free cooking!

## Team Members

- Sai Athoti
- Deep Parekh
- David Mwita
- Adi Poluri

  
## Goals
- ### Minimal Requirements
  - [x] Ingredient Input: Users must be able to manually input or upload pictures of their ingredients.
  - [x] Recipe and Ingredient Storage: The system should store user-generated recipes along with their ingredients.
  - [x] Recipe Retrieval: Provide basic functionality to return recipes based on the entered ingredients, even if initially mocked or simplified.
  - [x] User Interface: Develop a basic user interface for inserting ingredients and viewing recipes, ensuring ease of use.
- ### Standard Requirements
  - [x] Image-to-Text Conversion: Implement image-to-text conversion for recognizing food ingredients from uploaded pictures.
  - [x] Preference-Based Recipes: Take user preferences into account when generating recipes, tailoring outputs to individual tastes.
  - [x] Advanced Recipe Generation: Employ machine learning models or external APIs to generate recipes based on user-inputted ingredients.
  - [x] Recipe Interaction: Allow users to rate and favorite recipes, which will aid in refining and improving recipe suggestions.
- ### Stretch Requirements
  - [x] Smart Ingredient and Recipe Memory: Save frequently used ingredients and recipes to streamline the generation process and prevent repetitive suggestions.
  - [x] Nutritional Information: Integrate detailed nutritional information for each recipe, enhancing the app's health-oriented utility.
  - [ ] Voice Controls: Incorporate voice control functionalities, enabling users to interact with the app hands-free, which is particularly useful during cooking.
  - [x] User Accounts: Develop user accounts to save recipes, user preferences, and a history of generated recipes.

## Test Account with pre-loaded Data
- Email: test@test.com
- Password: test

## Description on usage of tech from Units 1-5 
- Unit 1: JS/HTML/CSS
  - HTML and JSX: While traditional HTML was minimally used, the `index.html` file serves as the entry point for our React application. JSX, which closely resembles HTML, was extensively utilized to define the structure and layout of our React components.
  - CSS for Styling: CSS was crucial for styling our React components, both directly and through the use of CSS-in-JS libraries such as ChakraUI. We applied custom styles to our components to enhance the user interface and ensure a consistent design across the application.
  - JavaScript Across the Stack: JavaScript was the backbone of our entire project, driving both the client-side and server-side logic. On the client side, we used JavaScript extensively with React to create interactive user interfaces and manage state with Redux. On the server side, JavaScript powered our backend using Node.js and Express, handling API requests, routing, and server-side logic.
    
- Unit 2: React/Redux
  - We leveraged React for our front end, employing React Router for efficient page routing and Redux for comprehensive state management across all pages. Thunks enabled asynchronous actions and state updates, which were seamlessly reflected in the frontend. Additionally, using the ChakraUI component library accelerated development with its out-of-the-box responsive components and comprehensive documentation, improving our development velocity and ease of troubleshooting.
 
- Unit 3: NodeJS
  - Our app is powered by a Node.js/Express.js server. We implemented authentication middleware to secure our routes. To maintain a clean and organized codebase, we separated our server logic into distinct route and controller files.

- Unit 4: MongoDB
  - Our database is hosted on MongoDB Atlas, containing our users and recipes collections. Our backend supports basic CRUD operations to manage this data efficiently. We leveraged Mongoose and defined schemas to simplify database interactions. Ultimately, compared to SQL alternatives, MongoDB made it easier to modify and add schema details, allowing us to better handle changing user requirments as the application evolved. 

- Unit 5: Release Engineering
  - Deployment on Render.com: Our application is deployed on Render.com, leveraging its robust infrastructure for reliable and scalable hosting. 
  - CI/CD Pipelines: We implemented continuous integration and continuous deployment (CI/CD) pipelines that automatically run tests on every commit and pull request to the main branch. This ensures that our code remains stable and functional throughout the development process.
  - GitHub Actions Integration: For our CI/CD workflow, we used GitHub Actions, which integrates seamlessly with our existing tools. This integration helps reduce the likelihood of version-breaking changes by thoroughly testing each update before deployment, facilitating quicker and more confident releases.

## Above and Beyond Functionality

### Smart Ingredient Generation from Images
PantryPal allows users to generate ingredient lists from images they upload. Utilizing the OpenAI API for image analysis, the app identifies and lists ingredients from photos of users' pantries or fridges automatically.

**In-Depth Explanation:**
- **Technology Stack:** OpenAI API for image analysis and ingredient recognition.
- **Functionality:** Users upload or capture images; the system processes these images to detect and list ingredients, minimizing manual entry.

### Personalized Recipe Generation Using AI
PantryPal offers personalized recipe suggestions using OpenAI API and Claude LLM, tailored to user preferences and available ingredients.

**In-Depth Explanation:**
- **Technology Stack:** OpenAI API and Claude LLM for natural language processing and personalized recipe recommendations.
- **Functionality:** Users' dietary preferences and available ingredients are used to generate customized recipes in real-time.
- **Challenges Overcome:** Overcame API Rate Limits by saving generated recipes and using them instead of sending requests to API.

### Additional Advanced Features

1. **User Accounts and Preferences:**
   - Developed user accounts to save recipes, preferences, and historical data for a personalized experience.

2. **Recipe Sharing:**
   - Enabled users to share recipes via links, enhancing community engagement and allowing users to easily exchange their favorite recipes.

4. **Nutritional Information:**
   - Integrated detailed nutritional information for each recipe, providing users with insights into the nutritional content of their meals.

## Next Steps
- Discover page for finding recipes that other people have shared
- Expanding on User Profiles
- Adding "Verified" tag to let users know when a recipe has been verified by a real user
- Implementing a smart similarity search
- Add an interactive mode that lets users get Text-to-Speech directions
- ...more

## List of Contributions

- **Sai Athoti**
  - I worked largely on the backend with a bit of frontend, with a bit of debugging and testing. I set up the components for image processing (camera and file upload). For backend, I set up the MongoDB with some basic schemas for users and recipes, alongside intial server and route implementation.
- **Deep Parekh**
  - I worked on the backend, frontend and the deployment of the app. For the backend, I designed a comprehensive test suite, refactored it and added new functions at multiple points for the server routes and MongoDB connection while for the frontend, I set up the main redux functionality and integrating it, made some UI improvements for recipes and ingredients and also made the initial data schemas and contributed to some bug fixes across the stack. I also created the GitHub actions file for CI/CD and ensured the app hosted on Render properly.
- **David Mwita**
  - My primary focus was the frontend. I was responsible for styling the pages to ensure a visually appealing and user-friendly interface. Additionally, I worked on making the frontend responsive, ensuring the app performs well on various devices and screen sizes. In addition to my frontend work, I also created the database schema for the backend, designing the structures to store user data, ingredients, and recipes efficiently.
- **Adi Poluri**
  - I worked on both the backend and frontend. In the backend I implemented the Auth System, Recipe routes, Ingredient routes as well as user handling in MongoDB. In the frontend, I implemented the auth pages, recipe page, ingredients page, and preferences page as well as connecting all pages to redux. Added redux thunks and handlers to make calls to backend. I did some of the styling for most of the pages of our app aswell. Other than large notable features, I did a lot of the bug fixing and deployement issue debugging to get everything running smoothly. I also refactored and cleaned up the entire codebase and organized everything.





