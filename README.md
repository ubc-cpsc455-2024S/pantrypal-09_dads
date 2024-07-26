# Group 09 - PantryPal

[![Test and Deploy](https://github.com/ubc-cpsc455-2024S/pantrypal-09_dads/actions/workflows/test_and_deploy.yaml/badge.svg?event=push)](https://github.com/ubc-cpsc455-2024S/pantrypal-09_dads/actions/workflows/test_and_deploy.yaml)

## Project Description

Transform your cooking experience with PantryPal, the ultimate app for home cooks, foodies, and anyone looking to whip up delicious dishes with ease. Snap a photo of your fridge contents, and let our AI-powered app identify your ingredients and suggest mouth-watering recipes tailored just for you. Say goodbye to the daily "What's for dinner?" dilemma and hello to personalized, hassle-free cooking!


## Team Members

- Sai Athoti
- Deep Parekh
- David Mwita
- Adi Poluri

  
## Project Task Requirements
- ### Minimal Requirements
  - Ingredient Input: Users must be able to manually input or upload pictures of their ingredients.
  - Recipe and Ingredient Storage: The system should store user-generated recipes along with their ingredients.
  - Recipe Retrieval: Provide basic functionality to return recipes based on the entered ingredients, even if initially mocked or simplified.
  - User Interface: Develop a basic user interface for inserting ingredients and viewing recipes, ensuring ease of use.
- ### Standard Requirements
  - Image-to-Text Conversion: Implement image-to-text conversion for recognizing food ingredients from uploaded pictures.
  - Preference-Based Recipes: Take user preferences into account when generating recipes, tailoring outputs to individual tastes.
  - Advanced Recipe Generation: Employ machine learning models or external APIs to generate recipes based on user-inputted ingredients.
  - Recipe Interaction: Allow users to rate and favorite recipes, which will aid in refining and improving recipe suggestions.
- ### Stretch Requirements
  - Smart Ingredient and Recipe Memory: Save frequently used ingredients and recipes to streamline the generation process and prevent repetitive suggestions.
  - Nutritional Information: Integrate detailed nutritional information for each recipe, enhancing the app's health-oriented utility.
  - Voice Controls: Incorporate voice control functionalities, enabling users to interact with the app hands-free, which is particularly useful during cooking.
  - User Accounts: Develop user accounts to save recipes, user preferences, and a history of generated recipes.

## Progress 4 Update
- ### Minimal Requirements
  - Ingredient Input: Users must be able to manually input or upload pictures of their ingredients.
  - Recipe and Ingredient Storage: The system should store user-generated recipes along with their ingredients.
  - Recipe Retrieval: Provide basic functionality to return recipes based on the entered ingredients, even if initially mocked or simplified.
  - User Interface: Develop a basic user interface for inserting ingredients and viewing recipes, ensuring ease of use.
- ### Standard Requirements
  - Image-to-Text Conversion: Implement image-to-text conversion for recognizing food ingredients from uploaded pictures.
  - Preference-Based Recipes: Take user preferences into account when generating recipes, tailoring outputs to individual tastes.
  - Advanced Recipe Generation: Employ machine learning models or external APIs to generate recipes based on user-inputted ingredients.
  - Recipe Interaction: Allow users to rate and favorite recipes, which will aid in refining and improving recipe suggestions.
- ### Stretch Requirements
  - Smart Ingredient and Recipe Memory: Save frequently used ingredients and recipes to streamline the generation process and prevent repetitive suggestions.
  - Nutritional Information: Integrate detailed nutritional information for each recipe, enhancing the app's health-oriented utility.
  - Voice Controls: Incorporate voice control functionalities, enabling users to interact with the app hands-free, which is particularly useful during cooking.
  - User Accounts: Develop user accounts to save recipes, user preferences, and a history of generated recipes.

## Task Breakdown
- User should be able to manually insert or upload (a picture of) the ingredients
  - Develop a form where users can enter ingredient names and quantities manually.
  - Implement File Upload/Take Photo Component
  - Handle the processing and conversion of image data for use in the backend.
  - Provide the user with the ability to edit or confirm the extracted ingredients before final submission.
- Store user-generated recipes and ingredients
  - Define the data structure for storing recipes and their associated ingredients in a database.
  - Implement functionality to send user input (both manual and from image processing) to the backend server.
  - Develop a system to temporarily store data while the user adds more ingredients or completes other interactions during a session
  - Implement the final storage functionality that saves the completed recipes and their ingredients to the database
  - Provide users with confirmation once their data is successfully stored


## Sketch Prototypes

<img src ="images/mockup.png" width="800px">






