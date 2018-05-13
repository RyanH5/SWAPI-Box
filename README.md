# SWapi-Box

SWapi-Box is a project designed to challenge your skills at accessing data from nested api's, manipulate that data and create small, reusable React components.  

To start this project, access the swapi.io api and fetch the required data. 

This application was built using the `create-react-app` boilerplate. This boilerplate provides a lot of build in content and dependencies for free. Take a few minutes to read through [the documentation](https://github.com/facebookincubator/create-react-app), and remember to refer back to these docs if you run into unexpected issues.  

## Set Up

Fork this project

Run `npm install` from the root directory

Run `npm start` and visit localhost:3000 in your browser

You can begin running your tests with `npm test`

## Project Goals

* Get comfortable whipping together React components on your own with the additional complexity of implementing React Router (if you want to).
* Write squeaky clean, well refactored code using ES6 syntax.
* Make informed design decisions to create a user-friendly application.
* Keep state based components to a minimum and leverage more functional components.
* Use a modular architecture for your application file structure.
* Think deeply about React Lifecycle Methods.
* Use propTypes for every component receiving props.

## Testing

You may find the testing utilitiy Enzyme helpful for this project. To use it to your project, check out the following
documentation:

[create-react-app
setupTests.js](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#initializing-test-environment)  
[initializing the enzyme adapter](http://airbnb.io/enzyme/docs/installation/react-15.html)  

## Important Notes
The API we are using is completely unsecured. This means we will be making all requests for this particular project directly from our browser. We will not be sending any advanced communication from a local server.
Although there are many resources out there for making API calls, you are asked to exclusively use the native fetch() API for this project. That being said, you are highly encouraged to experiment with axios and any other fun libraries you wish for comparison purposes.
The data does not need to persist. Feel free to implement Firebase or localStorage if you are so moved (it is also listed as an extension).
Specifications

* Iteration 0: Landing Page
When the app starts up '/' the user should see the opening scrolling text of a random film, with the title of the film and release year listed below.
There should be buttons to browse three different categories: People, Planets, and Vehicles.
There should be a button to view favorites, with the number of current favorites indicated.

* Iteration 1: Get People
When a user clicks on People, the page is populated with cards with data for each person.
The cards should have:
Name
Homeworld
Species
Population of Homeworld
A button to “Favorite” the person
The button should have an active class indicating it has been pressed.

* Iteration 2: Get Planets/Vehicles
When a user clicks on any of the other buttons, the data should then represent the button pressed.

Planet Cards:
Name
Terrain
Population
Climate
Residents
A button to “Favorite” the planet
Vehicle Cards:
Name
Model
Class
Number of Passengers
A button to “Favorite” the vehicle

* Iteration 3: Favorites
There should be a button on each card to save it to Favorites.
There should also be a button that when clicked, displays only the favorited cards.
Users should be able to unfavorite a card.
If there are no favorites, there should be a message indicating that there are no favorites.

* Extensions
Implement a More button. When clicked, the next 10 items of that category should be shown. There should be a Back button to go back to the previous page.
Use localStorage to persist data.
Implement React Router
The URL should match the category chosen. For example, clicking on the People button routes the user to '/people'and display the people cards.
When a user visits '/favorites' the favorited cards are displayed.

## Rubric

* Specification Adherence
4 - The application completes all 3 iterations above and implements one or more of the extensions.
3 - The application completes all 3 iterations.
2 - The application is in a usable state, but is missing some of the features outlined in the specification above.
1 - The application is missing multiple features essential to having a complete application.

* Code Quality
4 - Developer demonstrates complete understanding of React with appropriately separated components and exceptionally well refactored code.
3 - Developer appears comfortable in React. There are minor opportunities to refactor.
2 - Developer selected appropriate libraries and frameworks to build the app but did not use them as intended. Significant refactoring necessary.
1 - Developer did not make any effort to use React effectively or refactor code.

* CSS/Design
4 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has minimal recommendations for design changes. Follows 10 Essential Usability Guidelines.
3 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has multiple recommendations for design changes. Follows majority of the 10 Essential Usability Guidelines.
2 - Developer has made intentional design decisions to create a user friendly application but Louisa would be mad. Attempts to follow 10 Essential Usability Guidelines.
1 - Developer did minimal to no CSS for this project besides what was indicated in the comp.

* Testing
4 - Every component is tested from both a unit and acceptance standpoint, all crucial functionality is tested
3 - Almost all components are tested to a level that indicates developer has an understanding of testing
2 - A valid attempt was made to test functionality with obvious gaps where functionality is not tested
1 - There was little to no attempt to test this application.

* PropType Implementation
Pass - Proptype validation is implemented for any component receiving props.
Fail - There are components missing proptype validation.

* README Updates
Pass - The README.md file has been updated with a description of the project, the team, and how to get it up and running
Fail - The boilerplate README is still in place

* Code Sanitation
The output from ESLint shows…

4 - Zero complaints
3 - Five or fewer complaints
2 - Six to ten complaints
1 - More than ten complaints

* Workflow
4 - Developer(s) make many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren’t reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer(s) effectively use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer(s) have committed source code that should be .gitignored. There are no instances of “dead” or commented-out code and debugger statements like console.log.

3 - Developer(s) make many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer(s) use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer(s) have committed source code that should be .gitignored. There may be some instances of “dead” or commented-out code and debugger statements like console.log that need to be cleaned up.

2 - Developer(s) make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer(s) rarely use git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.

1 - Developer(s) make very few commits that each cover too much responsibility and aren’t indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.