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
- **Unit 1: JS/HTML/CSS**
  - **HTML and JSX**: HTML was used primarily in the index.html file, serving as the entry point for our React application. However, JSX, which is a syntax extension of JavaScript and closely resembles HTML, was extensively utilized to define the structure and layout of our React components. Using JSX allowed us to write components in a way that combines HTML-like syntax with JavaScript logic, making the code more readable and maintainable. This approach enhanced the development experience by leveraging the power of JavaScript while maintaining the clarity of HTML.
  - **CSS for Styling**: CSS was crucial for styling our React components, both directly and through the use of CSS-in-JS libraries such as ChakraUI. We applied custom styles to our components to enhance the user interface and ensure a consistent design across the application. This approach not only improved the visual appeal but also made the styling process more efficient
  - **JavaScript Across the Stack**: JavaScript was the backbone of our entire project, driving both the client-side and server-side logic. On the client side, we used JavaScript extensively with React to create interactive user interfaces and manage state with Redux. On the server side, JavaScript powered our backend using Node.js and Express, handling API requests, routing, and server-side logic. JavaScript's versatility and extensive ecosystem made it an ideal choice for developing a full-stack web application, enabling us to use a single language across the entire stack and streamline the development process.
    
- **Unit 2: React/Redux**
  - **React for Frontend Development**: We leveraged React for our frontend, using its component-based architecture to build a modular and maintainable user interface. React Router enabled efficient page routing, allowing smooth navigation without full page reloads, enhancing the user experience. Compared to traditional JavaScript frameworks like jQuery, React’s virtual DOM and declarative nature provided a more efficient and predictable way to build UIs, making our code easier to debug and maintain. Additionally, using the ChakraUI component library accelerated development with its out-of-the-box responsive components and comprehensive documentation, improving our development velocity and ease of troubleshooting.
  - **Redux for State Management**: Redux was used for comprehensive state management across all pages, ensuring consistency and predictability in our application's behavior. We utilized thunks for handling asynchronous actions, allowing seamless API calls and state updates. While React’s Context API can manage state, Redux offers a more scalable solution for larger applications with complex state interactions. Its middleware capabilities (like thunks) enable more sophisticated state management, which would be more cumbersome to implement with the Context API alone.
 
- **Unit 3: NodeJS and Express**
  - **Node.js for Server-Side Development**: Our application is powered by a Node.js server, leveraging its event-driven, non-blocking I/O model for efficient and scalable server-side operations. Node.js allowed us to use JavaScript across the entire stack, streamlining the development process. Compared to traditional server-side languages like PHP or Ruby, Node.js offers a more unified development experience.
  - **Express for Routing and Middleware**: We utilized Express.js to handle routing and middleware in our application. Express.js provided a minimalistic yet powerful framework for creating server-side logic. We implemented authentication middleware to secure our routes, ensuring that only authorized users could access certain endpoints. This approach enhances security and aligns with best practices for web application development. Compared to more heavyweight frameworks like Django or Ruby on Rails, Express.js offers greater flexibility and simplicity, allowing us to build custom middleware and routing logic tailored to our needs. To maintain a clean and organized codebase, we separated our server logic into distinct route and controller files.

- **Unit 4: MongoDB**
  - **MongoDB Atlas for Database Hosting**: Our database is hosted on MongoDB Atlas, providing a fully managed, cloud-based solution that ensures high availability, scalability, and security. MongoDB Atlas allows us to focus on development without worrying about database management tasks such as backups, scaling, and monitoring. Ultimately, compared to SQL alternatives, MongoDB made it easier to modify and add schema details, allowing us to better handle changing user requirments as the application evolved. 
  - **Mongoose for Simplified Database Instructions**: We used Mongoose to define schemas and interact with our database, enforcing data validation and creating a clear structure for our collections. This made our code more readable and maintainable. 

- **Unit 5: Release Engineering**
  - **Deployment on Render.com**: Our application is deployed on Render.com, leveraging its robust infrastructure for reliable and scalable hosting. Render.com simplifies the deployment process by automatically handling scaling, security, and server management, allowing us to focus on development
  - **CI/CD Pipelines**: We implemented continuous integration and continuous deployment (CI/CD) pipelines that automatically run tests on every commit and pull request to the main branch. This ensures that our code remains stable and functional throughout the development process.
  - **Comprehensive Testing with GitHub Actions Integration**: For our CI/CD workflow, we used GitHub Actions, which integrates seamlessly with our existing tools. We extensively tested the backend using Supertest and Jest, ensuring that our API endpoints function correctly and that our server logic is reliable. GitHub Actions helps reduce the likelihood of version-breaking changes by thoroughly testing each update before deployment. This integration facilitates quicker and more confident releases, ensuring that our application remains reliable and up-to-date.

## Above and Beyond Functionality

### - Smart Ingredient Generation from Images
PantryPal allows users to generate ingredient lists from images they upload. Utilizing the OpenAI API for image analysis, the app identifies and lists ingredients from photos of users' pantries or fridges automatically.

**In-Depth Explanation:**
- **Technology Stack:** OpenAI API for image analysis and ingredient recognition.
- **Functionality:** Users upload or capture images; the system processes these images to detect and list ingredients, minimizing manual entry.

### - Personalized Recipe Generation Using AI
PantryPal offers personalized recipe suggestions using OpenAI API and Claude LLM, tailored to user preferences and available ingredients.

**In-Depth Explanation:**
- **Technology Stack:** OpenAI API and Claude LLM for natural language processing and personalized recipe recommendations.
- **Functionality:** Users' dietary preferences and available ingredients are used to generate customized recipes in real-time.
- **Challenges Overcome:** Overcame API Rate Limits by saving generated recipes and using them instead of sending requests to API.

### Additional Advanced Features

1. **User Accounts and Preferences:** Developed user accounts to save recipes, preferences, and historical data for a personalized experience.

2. **Recipe Sharing:** Enabled users to share recipes via links, enhancing community engagement and allowing users to easily exchange their favorite recipes.

3. **Nutritional Information:** Integrated detailed nutritional information for each recipe, providing users with insights into the nutritional content of their meals.

## Next Steps
- **Discover Page**: We could implement a Discover page for finding recipes shared by other users, enhancing community engagement.
- **User Profiles**: We could expand user profiles to include more personalized features and user interactions.
- **Verified Tag**: Adding a "Verified" tag could indicate recipes that have been tested and approved by real users, increasing trust in the recipe quality.
- **Smart Similarity Search**: We could implement a smart similarity search to help users find recipes based on similar ingredients or preferences.
- **Voice Controls and Interactive Mode**: We could address the incomplete stretch requirement of incorporating voice control functionalities, enabling users to interact with the app hands-free during cooking, and add an interactive mode that provides Text-to-Speech directions to enhance accessibility and usability.
- ...more

## List of Contributions

- **Sai Athoti**
  - I worked largely on the backend with a bit of frontend, with a bit of debugging and testing. I set up the components for image processing (camera and file upload). For backend, I set up the MongoDB with some basic schemas for users and recipes, alongside intial server and route implementation.
- **Deep Parekh**
  - I worked on the backend, frontend, and deployment of the application. For the backend, I designed the test suite, refactored code, and added new functions for server routes and MongoDB connection. On the frontend, I set up Redux functionality, improved the UI for recipes and ingredients, and created the initial data schemas. Additionally, I led deployment by creating the GitHub Actions file for CI/CD and setting the app up on Render, ensuring it was properly hosted.
- **David Mwita**
  - My primary focus was the frontend. I was responsible for styling the pages to ensure a visually appealing and user-friendly interface. Additionally, I worked on making the frontend responsive, ensuring the app performs well on various devices and screen sizes. In addition to my frontend work, I also created the database schema for the backend, designing the structures to store user data, ingredients, and recipes efficiently.
- **Adi Poluri**
  - I worked on both the backend and frontend. In the backend I implemented the Auth System, Recipe routes, Ingredient routes as well as user handling in MongoDB. In the frontend, I implemented the auth pages, recipe page, ingredients page, and preferences page as well as connecting all pages to redux. Added redux thunks and handlers to make calls to backend. I did some of the styling for most of the pages of our app aswell. Other than large notable features, I did a lot of the bug fixing and deployement issue debugging to get everything running smoothly. I also refactored and cleaned up the entire codebase and organized everything.





