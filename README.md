This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Udacity project - Wold you rather

Application is built using react and redux. Server is implemented into the application. For asynchronous communication with the server, I'm using redux thunk.

### Instructions to run the application

In order to run the project, clone the repository

`git clone https://github.com/peter-krajcir/udacity-would-you-rather.git`

Then switch to the cloned directory

`cd udacity-would-you-rather`

And install the dependecies

`npm install`

Then you will be able to run the project by executing

`npm start`

The project starts in browser it opens [http://localhost:3000](http://localhost:3000) so you will be able to see it.

### User Management

In order to use the webpage, user must be logged in. He can from 3 different users available in the dropdown. To switch the users, click on the Logout link in the upper menu

### Application

#### Home

2 categories of the questions: Unanswered (selected by default) and Answered based on the vote of the signed user

#### New Question

Signed user can create a new poll with 2 options for voting

#### Leaderboard

Descending ordered list of the users based on their votes and created questions
