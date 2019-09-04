# Crown Clothing E-commerce Website

Crown Clothing is a large e-commerce website built using React, Redux, Hooks, GraphQL, ContextAPI, Stripe and Firebase. 

## App Flow

__Welcome to Crown Clothing__
!["Homepage"](https://github.com/declan-wu/crwn-clothing/blob/master/public/Screen%20Shot%202019-09-04%20at%2010.57.09%20AM.png)


__Shop Items__
!["shopping page"](https://github.com/declan-wu/crwn-clothing/blob/master/public/Screen%20Shot%202019-09-04%20at%2010.59.21%20AM.png)

__Register__
!["Register"](https://github.com/declan-wu/crwn-clothing/blob/master/public/Screen%20Shot%202019-09-04%20at%2011.03.16%20AM.png)


## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Learning Note
- After inplementing signin, and signup form and basic structure. I realized that the state management is a bit of problem now as states get harder to track. 
  - one problem is with props drilling down from components into its children even tho the components in between don't need those props. 
  - There would be so many states added to components just to make it more reusable to account for the fact that the child components it may or may not have need that prop
- As we building up the pages and there are also more components in our folder. Need to find a way to keep track of all the components as well. 
- Since this project focus on React, and I also want to include external signin with Google/Facebook functionality. I went with Google Firebase service rather than using regular backend and database to store the user authentication data.  


### Redux
- good for managing large state
- useful for sharing data between components
- predictable state management using 3 principles
  - single source of truth
  - state is read only
  - changes using pure functions
- redux flow: action -> root reducer -> store -> DOM changes
- It's a common pattern to keep only import states in Redux Store while keeping UI specific states like form input in this.state


### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

