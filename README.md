# Cheers To Beers  

Cheers To Beers is a social media platform where users can show thier love of different beers and share a drink with one another even if they aren't in the same room. It offers the chance to find friends, interact and review their own drinks.  
The deployed site can be found here - [Cheers-To-Beers](https://cheers-to-beers-4e5512c864fe.herokuapp.com/)  

This website uses the Cheers To Beers API.  
The repository can be found here- [Cheers-API-GitHub-Repository](https://github.com/DavidDock/cheers-api)  
The deployed API found here- [Cheers-API](https://cheers-to-beers-api-5a858b4697bd.herokuapp.com/) 

## CONTENTS

- [Cheers To Beers](#cheers-to-beers)
  - [CONTENTS](#contents)
  - [User Experience](#user-experience)
    - [Who is the Website for](#who-is-the-website-for)
    - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Wireframes](#wireframes)
  - [Agile Methodology](#agile-methodology)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks Libaries and Programs Used](#frameworks-libaries-and-programs-used)
  - [Features](#features)
    - [Accessibility](#accessibility)
    - [Future Implementations](#future-implementations)
  - [Deployment](#deployment)
    - [Heroku](#heroku)
    - [Fork Repository](#fork-repository)
    - [Clone Repository](#clone-repository)
  - [Testing](#testing)
  - [Credits](#credits)
    - [Learning](#learning)
  - [Media](#media)

## User Experience

### Who is the Website for  
For people with an interest in beers and wish to interact with other like minded people through a socail media website. It allows people to review their drinks and interact with other members by giving them a cheers, commenting their post or following them. It allows peolpe to share a drink with eachother even if they are not physically together.

### Design  
The idea of this website is to take the user into a bar setting with a dark backround and neon colors to emulate bar signs.

### Colour Scheme
The color scheme fits in with the overal design goals. With a dark overall feel with neon colors to match the atmosphere of a bar.  
To meet WCAG 2.0 criteria, the color scheme was then passed to [eightshapes.com](https://eightshapes.com/) to generate an accessibility table, only accessible text colors were then used to ensure easy reading. Prodominantly white text was used as this worked well with the design theme.

![Color-grid](public/documentaion/images/contrast-grid.png)

### Typography
The choice of Typography again follows the overall style. Reenie-Beanie from [Google Fonts](https://fonts.google.com/specimen/Reenie+Beanie) was used throughout to add some playfull style to the website.

![Reenie-Beanie](public/documentaion/images/reenie-beanie.png)

### Wireframes
![Layout-Logged-Out](public/documentaion/wirframes/layout-logged-out.png)
![Layout-Logged-In](public/documentaion/wirframes/layout-logged-in.png)
![About-And-Contact](public/documentaion/wirframes/about_contact.png)
![Sign-Up-Sign-In](public/documentaion/wirframes/sign-up_in.png)
![Posts-Search](public/documentaion/wirframes/posts-search.png)
![Post-detail](public/documentaion/wirframes/post-detail.png)
![Profile](public/documentaion/wirframes/profile.png)
![Profile-Edit](public/documentaion/wirframes/profile-edit.png)


## Agile Methodology 

Agile methodology was used throughout the deveploment for this project and I found it extremly helpful to keep track of my project.

The project was broken down into Epics and User Stories and the MoSCoW method was used to determine relevent features needed for the scope of this project.

Issues were created in GitHub for each Epic and User Story with Tasks to complete and MoSCoW labels on each one. A Kanban board was also created to keep track of these Issues. A Milestone for the MVP was also created and linked to relevant Issues.

The project's issues can be found [Here](https://github.com/DavidDock/cheers-to-beers/issues)

The project's Kanban board can be found [Here](https://github.com/users/DavidDock/projects/3)

The User Story table can be found below:

![User-Stories](public/documentaion/images/cheers-frontend-user-stories.png)

## Technologies Used  

### Languages Used  

### Frameworks Libaries and Programs Used  

- Git - Used for version control
- GitHub - Used to store the repository and GitHub projects for the Kanban board
- [Google Fonts](https://fonts.google.com/) - Used for the font
- [balsamiq](https://balsamiq.com/) - Used to create wireframes

## Features

### Navigation Bars and Footer  

Having three navigation bars allows users to have easy access to all features. These navigation bars are pivotal to the overal design theme of the website echoing bar signs and menus, giving the user the feel that they are in a virtual bar.

#### Top Nav Bar
User Logged Out  

![Top-Nav-Logged-Out](public/documentaion/images/features/toploggedout.png)

User Logged In  

![Top-Nav-Logged-In](public/documentaion/images/features/toploggedin.png)  

The Top Nav bar has the LOGO for Cheers To Beers which links back to home displaying all posts. If the user is not a member it allows the user to go to the log in page. If the user is a member their profile image is displayed with a link to thier profile and also a link to the about page.

#### Footer
User Logged Out  

![Footer-Logged-Out](public/documentaion/images/features/footerloggedout.png)

User Logged In  

![Footer-Logged-In](public/documentaion/images/features/footerloggedin.png)  

The Footer has a Goodbye LOGO and If the user is a member a logout button and a link to the contact page. If the user is not a member it provides a link to the registration page.

#### Side Nav bar
User Logged Out and In 

![Footer-Logged-Out](public/documentaion/images/features/sidenav.png)  

The Side navigation bar allows the logged in user easy access to filter the posts by them all, thier starred posts, their friends posts and thier own posts. If the are not logged in yet then it provides links to the about and contact pages.

### Register and Log In

![Register](public/documentaion/images/features/register.png)
![Log-In](public/documentaion/images/features/login.png)  

The User can Register and Log In, they prompted if an error is made during form submission.

### Accessibility  

### Future Implementations  

## Deployment  

### Heroku  

- Make sure the backend api has the correct CLIENT_ORIGIN convig var to match the frontend url. Details can be found in the README's deployment section of [Cheers-API-GitHub-Repository](https://github.com/DavidDock/cheers-api)
- Log in to Heroku and create App with unique name
- Click on deploy and choose GitHub and link to the repository [Cheers-To-Beers-GitHub-Repository](https://github.com/DavidDock/cheers-to-beers)
- Click on deply branch
- Open App

Visit the deployed site: [Cheers-To-Beers](https://cheers-to-beers-4e5512c864fe.herokuapp.com/)  

### Fork Repository
- Go to the [Cheers-To-Beers-GitHub-Repository](https://github.com/DavidDock/cheers-to-beers)
- Click "Fork" which can be found in the top right corner

### Clone Repository
- Go to the [Cheers-To-Beers-GitHub-Repository](https://github.com/DavidDock/cheers-to-beers)
- Under the repository click on "go to" then under the "local" tab copy the HTTPS clone URL
- In your local development environment go to the terminal
- Change the current working directory to the location you want the cloned directory to be made
- Type "git clone" and then paste the clone URL and press enter


## Testing

Please refer to [TESTING.MD](TESTING.md)  

## Credits  

### Learning
The code used for this project was taught to me by code insitute. The Code Insitutes project run throughs 'Django Rest Framework' and 'Moments' helped me greatly with the development of my project.

## Media

- [Tinypng.com/](https://tinypng.com/) - Used to compress images
- [Favicon.io](https://favicon.io/) - Used to generate favicon
- [Iconpacks.net](https://www.iconpacks.net/) - Used for the beer glass icon
- [Amiresponsive](https://ui.dev/amiresponsive) - Used to see site on different devices and create the image for the top of this README