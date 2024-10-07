# Karate-Quiz

[View the Live Project](https://finnbarrambrose.github.io/Karate-Quiz/)

## Introduction
Karate-Quiz is a multiple-choice karate quiz designed to help users improve their karate knowledge based on their belt level. Users can select their current belt or the next belt they are aiming for, and each belt level contains four questions that get progressively harder. This project aims to educate and engage users, providing an interactive way to test and expand karate knowledge.

## Table of Contents

1. [Introduction](#introduction)
2. [Screenshots](#screenshots)
3. [Features](#features)
4. [Testing](#testing)
5. [Accessibility](#accessibility)
6. [Deployment](#deployment)
7. [Credits](#credits)

## Screenshots
![Quiz Screenshot](https://github.com/user-attachments/assets/940a2e1c-cc15-42ff-bd2e-dc6f3fc06225)
- Screenshot created using [ami.responsivedesign.is](https://ami.responsivedesign.is/).

## Features

### 1. Start Quiz Button
- **Description:** Starts the quiz and displays the questions based on the selected belt.
- ![Start Quiz Button](https://github.com/user-attachments/assets/57e3ebf7-15ed-4c35-964b-699beeb80496)

### 2. Belt Selector
- **Description:** Allows users to choose their current or target belt level, with each belt providing different questions.
- ![Belt Selector](https://github.com/user-attachments/assets/9a846e2e-054e-45b6-9900-3b3eeb4d7346)

### 3. Social Media Links
- **Description:** Links to social media platforms such as Twitter, Facebook, and Instagram, opening in a separate window to keep the quiz site active.
- ![Social Media Links](https://github.com/user-attachments/assets/b917843a-a4d6-46c6-81fb-3a29feb66799)

### 4. Newsletter Subscription
- **Description:** Allows users to submit their email to receive updates on new questions and features.
- ![Newsletter](https://github.com/user-attachments/assets/03438385-2714-422d-ba77-3777d13e206b)

### 5. Multiple Choice Questions
- **Description:** Provides multiple options for each question, simplifying the answer format for users.
- ![Multiple Choice Questions](https://github.com/user-attachments/assets/c05c635d-a284-4d71-b380-fa1d1a70a5f9)

### 6. Submit Button
- **Description:** Submits the answer for each question and moves on to the next automatically.
- ![Submit Button](https://github.com/user-attachments/assets/80beb1ec-8e47-428f-bc82-0d6084de06a4)

### 7. Reset Button
- **Description:** Restarts the quiz from the belt selection screen, allowing users to select a new belt or retry the current level.
- ![Reset Button](https://github.com/user-attachments/assets/81810467-7e26-4295-b59b-32ee1eaf584a)

### 8. Score Display
- **Description:** Displays the number of correct answers at the end of the quiz, encouraging further study without revealing which questions were incorrect.
- ![Score Display](https://github.com/user-attachments/assets/be408ec1-1ffb-42ef-8ae1-0a18310fba7e)

### 9. Alert Messages
- **Description:** Alerts for actions like failing to select a belt, missing an answer, or when the timer runs out.
- ![image](https://github.com/user-attachments/assets/db9d09a2-69bf-42d2-b4ac-f0145f2bf425)
- ![image](https://github.com/user-attachments/assets/cb149eed-8c7e-4c63-a6d0-344e68ebbbcb)
- ![image](https://github.com/user-attachments/assets/18a6b7b0-8a1a-4184-a298-46e0c70d43ea)


## Testing

- **W3C HTML Validator:** Ensures the HTML is valid and error-free.
  ![HTML Test](https://github.com/user-attachments/assets/36805e63-a3f2-48ed-8f0f-af3373bb45a1)

- **W3C CSS Validator:** Verifies CSS code for standards compliance.
  ![CSS Test](https://github.com/user-attachments/assets/c5dcc63e-2e96-4422-99ec-fe01ff8bb734)

  

## Accessibility
Accessibility was tested using Lighthouse to ensure the site is usable for all audiences. Improvements and adjustments were made based on these tests.

**lighthouse**  Checking the accessibility of the site.
  - ![image](https://github.com/user-attachments/assets/14d2f0c2-7525-4461-bee2-931ab3057c17)
  
## Deployment

The Karate-Quiz project was deployed online following a structured and iterative process. Below are the detailed steps taken during deployment, including code structure, testing, and optimizations.

## Deployment

Steps taken to deploy the Karate-Quiz project:

### 1. Initial Setup
- I established a clear folder structure for the project, organizing HTML, CSS, and JavaScript files within an "assets" directory. This helped ensure that all resources were easily accessible and maintainable, promoting a clean development environment.

### 2. HTML Structure
- Structured the HTML by incorporating essential quiz components, including the title and key buttons (start, submit, reset). I also added input placeholders to visualize the quiz layout more effectively. To facilitate JavaScript interactions, I assigned unique IDs to various `div` elements, ensuring they could be easily targeted in my scripts.

### 3. Styling the Quiz
- After building the HTML structure, I implemented basic CSS styling, choosing colors and fonts that aligned with the quiz's theme. I prioritized responsive design principles to ensure the quiz displayed well on various screen sizes, using media queries to adjust styles accordingly.

### 4. Question Implementation
- Compiled four questions for each belt level in a Word document, ensuring they were well-structured. I then transferred these questions into the JavaScript file, categorizing them by belt color. Initially, I experimented with a lettered multiple-choice format (A, B, C, D), but later simplified it by directly including the correct answer as the selectable option. This approach streamlined the testing process.

### 5. Connecting Code
- Using various YouTube tutorials and W3Schools resources for guidance on JavaScript functionality, I integrated my JavaScript code with the HTML structure and CSS styles. This process involved creating functions to manage quiz logic, handle user interactions, and dynamically update the HTML based on user input.

### 6. Code Cleanup
- After implementing the core functionality, I conducted a thorough code review to refine my scripts. I removed redundant code generated during experimentation and reorganized the HTML, CSS, and JavaScript files to enhance readability and maintainability.

### 7. Deployment
- Following feedback from my mentor, I successfully deployed the Karate-Quiz program online using GitHub Pages. To optimize the site’s performance, I refined my code by targeting specific functions rather than relying on generic header functions (removing these from all sections except the footer). This approach created a more consistent and efficient styling method by applying styles directly to IDs and classes.

### 8. Implementing Feedback
- I validated the HTML and CSS using W3C Validator tools. While I resolved most issues, one persistent warning related to the flexbox display remained. Changing it to `flex` produced an undesirable layout, so I maintained the current setup for visual consistency.
- Based on my mentor's advice, I added a timer configured for 30 seconds to enhance user engagement and streamline testing. Instead of using pop-up alerts, I set up alert messages directly on the page for a smoother user experience. These alerts now cover scenarios where a belt is not selected at quiz start, an answer is not chosen before submission, and when the timer expires.

### 9. Further Improvements
- I identified opportunities for further optimization in my JavaScript code, particularly by refining the belt selection logic. By replacing the existing `else if` statements with a more efficient method (e.g., `currentBeltQuestions`), I aimed to improve processing speed and overall site performance.

### Future Improvements
- Adding images to questions for better visual engagement.
- Improving the background image quality (current limitation: finding a larger image for free use).
- Expanding the question database to include more topics.
- Incorporating picture-based questions and answers.
- Displaying results with correct and incorrect answers at the end of the quiz for further learning.
- Highlighting correct answers for any questions answered incorrectly.


   
## Credits

### Code Resources:
1. https://www.youtube.com/watch?v=PBcqGxrr9g8 
2. https://www.youtube.com/watch?v=Vp8x8-reqZA&pp=ygUmcXVpeiB3ZWJzaXRlIHVzaW5nIGphdmFzY3JpcHQgdHV0b3JpYWw%3D 
3. https://www.w3schools.com/
4. https://javascript.info/first-steps


### Images & Videos:
- [Pexels - Free for Commercial Use](https://www.pexels.com/search/free%20commercial%20use/)

### Fonts:
- https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap
- https://fonts.googleapis.com
- https://fonts.gstatic.com

### Testing:
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
