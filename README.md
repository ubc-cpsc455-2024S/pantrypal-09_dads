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
  - Our website starts at our index.html...
  - There was a discussion in slack about what to include here...
    
- Unit 2: React/Redux
  - We use react for our front end. We use react router for page routing. We use redux for state management for all the pages. We use thunks to asynchronously do actions and update the state which is reflected in our frontend.
  - Using React component librariy like ChakraUI sped up development by allowing us to work with out-of-the-box responsive components. This documentation and standardization of components also increased the ease of torubleshooting and adding new details. 
 
- Unit 3: NodeJS
  - Our app runs on a NodeJS/ExpressJS server. We implemented authentication middleware to protect our routes. Our server is split into route/controller files to keep our implementation clean (and separate from the server code)

- Unit 4: MongoDB
  - We have a database on MongoDB Atlas that holds our users and recipes collection. Our backend has the basic CRUD routes to manipulate data stored there. etc.
  - We used mongoose and schemas to make handling database data easier.
  - Compared to SQL alternatives, MongoDB made it easier to modify and add schema details, allowing us to better handle changing user requirments as the application evolved. 

- Unit 5: Release Engineering
  - Deployed on Render.com, We have CI/CD pipelines to run tests on every commit and PR to main.
  - Github Actions for our CI/CD workflow integrates well into the tools we were already using and decreases the odds of version-breaking changes getting through, allowing for quicker deployment. 

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
  - 
- **David Mwita**
  - My primary focus was the frontend. I was responsible for styling the pages to ensure a visually appealing and user-friendly interface. Additionally, I worked on making the frontend responsive, ensuring the app performs well on various devices and screen sizes. In addition to my frontend work, I also created the database schema for the backend, designing the structures to store user data, ingredients, and recipes efficiently.
- **Adi Poluri**
  - I worked on both the backend and frontend. In the backend I implemented the Auth System, Recipe routes, Ingredient routes as well as user handling in MongoDB. In the frontend, I implemented the auth pages, recipe page, ingredients page, and preferences page as well as connecting all pages to redux. Added redux thunks and handlers to make calls to backend. I did some of the styling for most of the pages of our app aswell. Other than large notable features, I did a lot of the bug fixing and deployement issue debugging to get everything running smoothly. I also refactored and cleaned up the entire codebase and organized everything.





