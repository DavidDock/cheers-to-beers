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
The site was successfully deployed and can be viewed on Heroku

### Favicon
 
#### Acceptance Criteria
See the favicon

#### Results
The favicon can clearly be seen

### Navigation
 
#### Acceptance Criteria
Can see the basic nav bar, footer and sidebar.

#### Results
The top, side and footer navs can be correctly seen with relevent links to make the navigation on the site straight forward

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
Once a post is stared the user can successfully see all those posts on their "stared" feed allowing easy access to their favourite posts.

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
A logged in user can successfully create a comment and the number of comments increase under the comments icon.

### View comments
 
#### Acceptance Criteria
* All comments can be seen under a post.
* Infinite scroll of comments.

#### Results
All comments can be seen in the comments modal when pressed, the comments keep loading when scrolling down until there are none left.

### Delete comment

#### Acceptance Criteria
* Can delete own comment.
* Correct number of comments is displayed.

#### Results
A user can successfully delete their own comment clicking on the dropdown in the comments modal and pressing the bin icon. The number of comments under the comments icon in the post then successfully decreases.

### Edit comment
 
#### Acceptance Criteria
Can edit own comment

#### Results
The comment owner can click on the dropdown next to their comment and press the edit button, they then can edit the comment successfully.

### User Profile
 
#### Acceptance Criteria
Can see all user details

#### Results
The user can successfully see all relevant details of the profile they clicked on with correct number of followers/following and posts displayed. A logged in user can see the follow/unfollow button depending if they follow the user or not.

### Profile Posts
 
#### Acceptance Criteria
Can see all user posts with infinite scroll.

#### Results
All the posts from the profile owner can be scrolled through and clicked on to go to the post.

### Follow, Unfollow user
 
#### Acceptance Criteria
* A logged in user can follow and unfollow ther user.
* Number of followers changes for relevant followers and following.

#### Results
A logged in user can successfully follow or unfollow another user by pressing the button, the number of followers atomatically changes on the profile.  
When the user follows a new profile they can successfully see thats persons posts on thir "friends" feed to make it easier for the user to find relevant posts.

### Edit Profile
 
#### Acceptance Criteria
A logged in user can update thier name, password and profile information.

#### Results
The user can successfully change thier username and password along with adding/editing their profile information. This allows them to share more of their details with the other users.

### Redirecting
 
#### Acceptance Criteria
A user can only go onto relevant pages and gets redirected if they go on the wrong page.

#### Results

### About Page
 
#### Acceptance Criteria
An about page can be seen.

#### Results
A user can click on the about page and successfully see the about message and see a description of the website.  
As admin in the backend [Cheers-API](https://cheers-to-beers-api-5a858b4697bd.herokuapp.com/) they can edit this message or create a new message and this then will be displayed in the about page.

### Contact Form
 
#### Acceptance Criteria
A user can send a contact message

#### Results
The user can contact the admin with thier suggestions or queires by sending a contact message and are given a success message once sent.

## Browser Testing
This website has been tested in google chrome and microsoft edge with no errors seen.  

## Device Responsiveness
This website is primarily developed for mobile devices as it is designed to be used on the go but it also works well on larger devices.  
Layout changes for different size devices are present and React bootstrap, along with css media queries have been used throughout to ensure responsiveness.  
Dev tools has been used throughout the development of the site to test responsiveness along with being tested on both laptop and mobile devices during the development . 
The website is responsive from as small as 320px wide and upwards. There are no overlapping elements and images aren't stretched or squashed.  

### Problems/Bugs highlighted and how they were fixed  

There was a minor issue during development relating to the infinite scroll feature:  
The layout of the site uses a scrollbar for the main section between the fixed top and bottom nav bar so when the infinite scroll container was added for all the posts to be seen another scrollbar is needed on larger devices (landscape). This is not ideal but in my opinion does not have a huge inpact on the user experience.  
This prompted a change to the wirefames for the comments infinite scroll and a pop up modal was used for the comments instead to prevent the double scrollbar, this works extremly well and is an improvement to the initial design.

## JavaScript Validator 

### Problems/Bugs highlighted and how they were fixed  

### Final Test Results 

## CSS Validator  

All the css modules and site url has been run through [The-W3C-CSS-Validator](https://jigsaw.w3.org/css-validator/) with no errors found.  
![CSS-Validator](public/documentaion/images/testing/cssvalidator.png)

### Problems/Bugs highlighted and how they were fixed  

On two occassions the margin and padding were given a value of none instead of 0 - this was changed to 0 to fix the errors.

### Final Test Results 

## Lighthouse  

### Problems/Bugs highlighted and how they were fixed  

### Final Test Results  

## Wave  

### Problems/Bugs highlighted and how they were fixed

### Final Test Results  

## Manual Testing  

## Other Bugs and Errors  
