## React Call Center Demo 
This React demo utilizes mock data from a local json string to populate a call center operator's view with a list of a customer's three most recent  purchases. The view provides form elements for marking the purchases as fraudulent, if the card was stolen, and a summary to fill out after the phone call.

To access a customer's data in the /operator view, use codes ```9001```, ```9002```, or ```9003``` and hit the "Show customer record" button. Numbers other than these will display a simple error message.

## On the web
A recent build is currently hosted on [Surge](https://surge.sh/) at: http://call-center-demo.surge.sh/operator

The Surge service hosts a flat, minimized build of the project, so code inspection is better done at the [Github repo](https://github.com/CodeTrafficker/call-center).


## Coding Highlights
Using: 
- "Mostly" ES6 JavaScript - const, let, ternary operations, arrow functions, import/exports, classes extending React component
- CSS vars for setting site colors
- Minimum CSS resets of browser defaults
- Flexbox instead of floats or Bootstrap/Foundation style frameworks
- A 'mobile-first' responsive design strategy
- Google web fonts Lato and Orbitron


### Caveats
- The Operator form does not submit to anywhere. The submit button simply reloads /operator and clears the form.
- The views for ```/home```, ```/manager```, and ```/admin``` are stubs with no functionality yet.


## Installation
This guide assumes you already have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

Clone or download master branch from Github to your local work directory.

Maneuver to your local version of /call-center/

Run 

```npm install```

then

```npm start```

This single page app with four views should then open in your browser at http://localhost:3000/ . Most of the action is at /operator, accessible via the second navigation tab.


## To-Dos
- Actually connect to a backend to submit form data
- Manager Views, to access submitted data and track calls
- Admin View to manage login access
- 404 handling


## Learn More
### Create-React-App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Surge.sh
"Static web publishing for Front-End Developers -- 
Simple, single-command web publishing. Publish HTML, CSS, and JS for free, without leaving the command line." at [Surge.sh](https://surge.sh/)

### Web Fonts
This demo uses [Lato](https://fonts.google.com/specimen/Lato) and 
[Orbitron](https://fonts.google.com/specimen/Orbitron) typefaces from 
[Google Fonts](https://fonts.google.com/)

