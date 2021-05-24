# Kenobi Password Manager

## Client Side

Client side is done in the Client folder.  \
`cd Client`

To install all dependencies, run \
`npm i`

### To run in Development mode 

In the project directory, you can run: \
`npm start` 

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### To build the app
In the project directory, run \
`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Server Side

Server side is done in the Server folder. \
`cd Server`

To install all dependencies, run \
`npm i`

Consider installing nodemon for ease of development \
`npm install -g nodemon` \
(omit -g if you don't want it to be installed globally)

To run the server, in the Server folder, run \
`nodemon server.js` \
or, if nodemon is not installed, run \
`node server.js` 

## Creating Database (in MongoDB Atlas)

Go to the [MongoDB Atlas](https://account.mongodb.com/account/login?n=%2Fv2%2F6086825ce97ae723ddc04224) site and log in.\
* Create a new project, name it as you like (eg. Kenobi).\
* Create a new cluster. For that, click on "Build a Cluster".\
* Choose a path of your choice (there's a free plan also).\
* Select a cloud provider and region (eg. Google Cloud, and Mumbai). \
It would take a few minutes to create the cluster. 

* Once it's created, click on "Connect".\
* On the screen that follows, click on "Add your current IP address" for the section "Whitelist your connection IP address". Under that, in the "Create a MongoDB User" section, add a username and password, and note it down. Then, click on "Choose a connection method". \
* On the "Choose a connection method" tab, select "Connect your application"and copy the connection string that proceeds it. 

* Go to your project folder. Go to the Server directory.  \
`cd Server` \
* Inside there, create a new file and name it '.env', or run in the terminal \
`touch .env` \
* Open the .env file in a text editor you prefer and copy \
`ATLAS_URI=<insert the connection string here>` \
* Save the file.

