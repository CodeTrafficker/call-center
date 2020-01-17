This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Call Center Demo 
This React demo utilizes mock data from a local json string to populate a call center operator's view with a list of a customer's last three purchases, and form elements for marking them as fraudulent, if the card was stolen, and a summary to fill out after the phone call.

To access a mock customer on the /operator view, use codes ```9001```, ```9002```, or ```9003``` and hit the "Show customer record" button. Numbers other than these will display a simple error message.

The pages for /, /manager, and /admin are stubs with no functionality yet.



### Coding Highlights
Using: 
- "Mostly" ES6 JavaScript - const, let, ternary operations, arrow functions, import/exports, classes;
- CSS vars for setting site colors;
- Flexbox instead of floats or Bootstrap/Foundation style frameworks
- A 'mobile-first' responsive design strategy
- Google web fonts Lato and Orbitron;




// ## On the web
// A recent build is currently hosted on [Surge](https://surge.sh/) at:
// http://XXXXXXXXXXX.surge.sh/


## Installation

This guide assumes you already have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

Clone or download master branch from Github to your local work directory.

Maneuver to your local version of /call-center/

Run 

```npm install```

then

```npm start```

This single page app with four views should then open in your browser at http://localhost:3000/ . Most of the action is at /operator, accessible via the second navigation tab.


## Caveats
- Operator form does not submit to anywhere. The submit button simply reloads /operator and clears the form.
- The pages for /home, /manager, and /admin are stubs with no functionality yet.


## To-Dos
- Actually connect to a backend to submit form data
- Manager Views
- Admin View
- 404 handling


 ## Creator [Phil Lollar](https://github.com/CodeTrafficker/)



## Learn More
### Create-React-App
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Surge.sh
"Static web publishing for Front-End Developers -- 
Simple, single-command web publishing. Publish HTML, CSS, and JS for free, without leaving the command line." at [Surge.sh](https://surge.sh/)

### Web Fonts
This demo uses [Lato](https://fonts.google.com/specimen/Lato) and 
[Orbitron](https://fonts.google.com/specimen/Orbitron) typefaces from 
[Google Fonts](https://fonts.google.com/)

### TITLE

// Can you enter tags here? responsive css react flexbox json forms
