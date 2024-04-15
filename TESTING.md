# CONTENTS

* [User Story Testing](#user-story-testing)
* [Browser Support](#browser-testing)
* [Device Responsiveness](#device-responsiveness)
* [JavaScript Validator](#javascript-validator)
* [CSS Validator](#css-validator)
* [Lighthouse](#lighthouse)
* [Wave](#wave)
* [Manual Testing](#manual-testing)
* [Other Bugs And Errors](#other-bugs-and-errors)

## User Story Testing  

### Create development environment
 
#### Acceptance Criteria
* Have a working development environment

#### Results
The development environment was correctly created

### Deployment
 
#### Acceptance Criteria
* See Deployed site

#### Results
The site was successfully deployed on Heroku

### Favicon
 
#### Acceptance Criteria
See the favicon

#### Results
The favicon can successfully be seen

### Navigation
 
#### Acceptance Criteria
Can see the basic nav bar, footer and sidebar.

#### Results
The top, side and footer navs can be correctly seen with relevent links.

### Router
 
#### Acceptance Criteria
* Can navigate to pages using router.
* Can see a page not found if needed.

#### Results
The router is working correctly with all links created going to the correct route.

### Connect to API
 
#### Acceptance Criteria
Have the front and backend connected.

#### Results
The backend had given the front end permission to use the api and is connected correctly.

### Sign-up
 
#### Acceptance Criteria
A new user can sign up

#### Results
A new user can sign up correctly and a profile is created and relevent errors shown if details entered are incorrect

### Sign-In
 
#### Acceptance Criteria
A user can sign in

#### Results
A user can sign in using the form with relavent errors shown if details entered are incorrect

### Logged in status
 
#### Acceptance Criteria
A user can see if they are logged in 

#### Results
When a user is logged in they can successfully see the relevant icons on all nav bars by using the current user context throughout the app.

### Refresh access tokens
 
#### Acceptance Criteria
The user stays logged in until they log out

#### Results
When logged in the user successfully stays logged in until they logout

### Sign-Out
 
#### Acceptance Criteria
* The user can log out.
* Correct icons are displayed.

#### Results
When the logged in user logs out the current user successfully is null and the relevant icons can be seen

### Profile avatar
 
#### Acceptance Criteria
The logged in user can see their avatar.

#### Results
The logged in user can successfully see their avatar displayed

### Create Post
 
#### Acceptance Criteria
The logged in user van create a post.

#### Results
A user can successfully create a post with errors if invalid data given

### View Post Page
 
#### Acceptance Criteria
You can view a single post.

#### Results
A single post can be seen on posts/#id with all relevant information displayed

### Star and Unstar a post
 
#### Acceptance Criteria
You can star and unstar a post.

#### Results
A logged in user can successfully star and unstar a post. The owner of the post cant star their own post and a non-user is be prompted to log in upon hover.

### Cheer and Uncheer a post
 
#### Acceptance Criteria
You can cheer and uncheer a post

#### Results
A logged in user can successfully cheer and uncheer a post. The owner of the post cant cheer their own post and a non-user is be prompted to log in upon hover.

### View all posts
 
#### Acceptance Criteria
See all posts by most recent

#### Results
All posts can be successfully seen ordered by most recent

### Filter posts
 
#### Acceptance Criteria
See all posts by filter when button pressed.

#### Results
When logged in each filter link can be pressed on the SideNav and relevent posts are shown.

### Search Posts
 
#### Acceptance Criteria
Search function working on Posts page

#### Results
The search function works within all or filtered posts, you can successfully search by title, type or user.

### Infinite scroll
 
#### Acceptance Criteria
See posts loading when scrolling down

#### Results
The infinite scroll works on posts, fetching more posts every 10 posts.

### Edit Post
 
#### Acceptance Criteria
A logged in user can edit their post.

#### Results
The logged in user can successfully edit their post with new text fields, image and rating. They are then redirected to that post.

### Delete Post
 
#### Acceptance Criteria
A logged in user can delete their post.

#### Results
A logged in user can successfully delete their post.

### Create a comment
 
#### Acceptance Criteria
* A comment can be added to a post.
* Number of comments of post can be seen.

#### Results

### View comments
 
#### Acceptance Criteria
* All comments can be seen under a post.
* Infinite scroll of comments.

#### Results

### Delete comment
 
#### Acceptance Criteria
* Can delete own comment.
* Correct number of comments is displayed.

#### Results

### Edit comment
 
#### Acceptance Criteria
Can edit own comment

#### Results

### User Profile
 
#### Acceptance Criteria
Can see all user details

#### Results

### Profile Posts
 
#### Acceptance Criteria
Can see all user posts with infinite scroll.

#### Results

### Follow, Unfollow user
 
#### Acceptance Criteria
* A logged in user can follow and unfollow ther user.
* Number of followers changes for relevant followers and following.

#### Results

### Edit Profile
 
#### Acceptance Criteria
A logged in user can update name password of profile information.

#### Results

### Redirecting
 
#### Acceptance Criteria
A user can only go onto relevant pages and gets redirected if they go on the wrong page.

#### Results

### About Page
 
#### Acceptance Criteria
An about page can be seen.

#### Results

### Contact Form
 
#### Acceptance Criteria
A user can send a contact message

#### Results

## Browser Testing

## Device Responsiveness

## JavaScript Validator 

### Problems/Bugs highlighted and how they were fixed  

### Final Test Results 

## CSS Validator

### Problems/Bugs highlighted and how they were fixed  

### Final Test Results 

## Lighthouse  

### Problems/Bugs highlighted and how they were fixed  

### Final Test Results  

## Wave  

### Problems/Bugs highlighted and how they were fixed

### Final Test Results  

## Manual Testing  

## Other Bugs and Errors  
