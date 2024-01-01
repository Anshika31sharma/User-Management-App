
# User Management App  


This React.js application allows users to manage tasks with the following functionalities: create, read, update, and delete tasks. The application ensures a user-friendly and responsive UI and utilizes Redux for state management and Saga for handling asynchronous API calls.


# Clone the repository to your local machine using the following command:


1. bash
2. Copy code
3. (git clone git@github.com:Anshika31sharma/User-Management-App.git)


# Navigate to the project directory:


1. bash
2. Copy code
3. cd Crud App


# Install the required dependencies:


1. bash
2. Copy code
3. npm install
4. Usage


# Start the development server:


1. bash
2. Copy code
3. yarn start


# Open your browser and visit (http://localhost:3000) to use the application.


# Working -:

1. A hamburger menu is provided  to add tasks. After clicking on the hamburger menu two placeholders will come with a add user button fill the details in it and hit the enter on Add user button and you can create the new user and it's details.

2. If you want to update the details of existing user so there is a update username button is provided in every card just hit enter and change the name by writing on placeholder and hit enter on the update username button and you'll see the changed name.

3. If you want to delete any user so  just click on the delete user button given for each user card.




# Design Choices -:

1. React Js for building
2. Redux for state management
3. Saga for Asynchronous API Calls
4. Bootstrap for UI Design

# Challenges Faced -:

1. Asynchronous Operations Management


Challenge:


Coordinating asynchronous operations, especially when making API calls, required careful consideration. Ensuring that the application remains responsive during these operations and handling potential errors were challenging aspects.


Resolution:


Redux Saga proved to be instrumental in managing these challenges. It provided a clear and structured way to handle asynchronous actions, allowing for better control and error handling.

2. Responsive Design Implementation


Challenge:


Creating a responsive design that adapts to various screen sizes and devices posed a challenge. Ensuring a consistent and user-friendly experience across different platforms required meticulous attention to detail.


Resolution:


CSS media queries were extensively used to create a responsive layout. Testing on multiple devices and screen sizes helped identify and address specific issues, ensuring a consistent user experience.

3. Frontend Validation


Challenge:


Implementing frontend validation for input fields presented challenges in terms of ensuring data integrity and providing meaningful user feedback.


Resolution:


The use of React.js allowed for the implementation of controlled components and client-side validation. This, combined with clear error messaging, improved the overall user experience.



![Image](/src/Assets/todolist.png)


# Authors

Anshika Sharma




