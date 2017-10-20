# CodeForChange

## MVP
1. #### User account abilities
  - signup
  - login
  - admin rights
<br>

2. #### About us

3. #### Apps
  - show amount raised
<br>

4. #### Donate
  - take user through process
  - if not login, ask to login or signup
<br>

5. #### Show donation change in app

## Extras
1. #### Hit bank api
  - transfer to bank
  - bank handles transfer
  - collect results

2. #### Passport login
  - signup with Passport
<br>
## getting started

Create folder for product then cd into it, once in you'll need a folder for your react frontEnd called ["react"](FinalProject/react) and for the backEnd we will use ["mongoose"](FinalProject/mongoose), which will be installed within our node.js

### now install [NPM](https://www.npmjs.com/) for Node.js and [Mongoose](http://mongoosejs.com/index.html)
##### (ie mongodb)
firstly create your [Package.JSON](react/package.json) file in the [react](FinalProject/react) folder
```sh
npm init
```

Now install a Node.js

```sh
npm install
```

and last lets add mongodb which will be setup for 'Mongoose'

```sh
npm install -g mongodb
```

```sh
npm install -g nodemon
```

```sh
sudo mongod
```

ok great now lets move on to the dependencies we will need to have a signUp/signIn ect
<br>

### Dependencies

now NPM and our Database(mongodb) are installed we can add our dependencies such as Mongoose and passport

1. passport
```sh
npm install passport --save
```
2. passport-local
```sh
npm install passport-local --save
```
3. mongodb(so js can work with it locally)
```sh
npm install mongodb --save
```
4. mongoose
```sh
npm install mongoose --save
```
5. passport-local-mongoose(so passport can interface with mongoose)
```sh
npm install passport-local-mongoose --save
```
6.
```sh
npm install --save body-parser
```
7.
```sh
npm install --save express-session
```
8.
```sh
npm install --save cookie-parser
```
9.
```sh
npm install --save app-config
```
<br>

ok good now we can move on to building our files up!

### folders

start by making a [client](FinalProject/react/client) within your react folder
```sh
mkdir client
```
then a [models](FinalProject/react/models)
```sh
mkdir models
```
then cd into client and create two more called [build](FinalProject/react/client/build) and [src](FinalProject/react/client/src)
```sh
mkdir build src
```


<br>

## basic files

[server.js](react/server.js)
[routes.js](react/routes.js)
[package.json](react/package.json)

```sh
npm init
```
will create [package.json](react/package.json) file for you, next you'll want to add it's dependencies

<br>

open [package.json](react/package.json) and add the code below.

```json
{
  "name": "end_point",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "Reece Jones",
  "license": "ISC",
  "dependencies": {
    "app-config": "^1.0.0",
    "body-parser": "^1.17.2",
    "cookie-parser": "^1.4.3",
    "express": "^4.13.4",
    "express-session": "^1.15.5",
    "mongodb": "^2.2.31",
    "mongoose": "^4.11.9",
    "passport": "^0.4.0",
    "passport-jwt": "^3.0.0",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.2.1"
  },
  "devDependencies": {},
  "description": ""
}
```

once that is done run npm install in terminal in [/react](FinalProject/react).
```sh
npm install
```
which will add all the required dependencies to the node folder.

<br>

### server.js

```js
var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
```
<br>


## models files

in react/models
[account.js](react/models/account.js)

### account.js

```js
var mongoose = require('mongoose'),
Schema = mongoose.Schema,
passportLocalMongoose = require('passport-local-mongoose')

var Account = new Schema({
  username: String,
  password: String
})

Account.plugin(passportLocalMongoose)

module.exports = mongoose.model('Account', Account)
```
<br>

## client files
root folder

webpack.config
package.json

in client/src
[app.js](react/client/src/app.js)
then make to folders ["auth"](FinalProject/react/client/src/auth) and ["components"](FinalProject/react/client/src/components)
in client/src/auth create
[LoginBox.jsx](react/client/src/auth/LoginBox.jsx)
[SignIn.jsx](react/client/src/auth/SignIn.jsx)
[SignOut.jsx](react/client/src/auth/SignOut.jsx)
[SignUp.jsx](react/client/src/auth/SignUp.jsx)
in client/src/components create
[Home.jsx](react/client/src/auth/Home.jsx)
[listing.jsx](react/client/src/auth/listing.jsx)
[Main.jsx](react/client/src/auth/Main.jsx)
[Individual.jsx](react/client/src/auth/Individual.jsx)



### package.json

```sh
npm init
```
ect ect


all the packages should look like this
```json
{
  "name": "client",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack -w"
  },
  "author": "Reece Jones",
  "license": "ISC",
  "dependencies": {
    "prop-types": "^15.5.8",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-router": "^3.0.2",
    "react-router-dom": "^4.1.1"
  },
  "devDependencies": {
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0"
  }
}
```
now add webpack

### webpack.config


```sh
npm install --save-dev webpack
```


### app.js

```js
var path = require('path')
var express = require('express')
var http = require('http')
var mongoose = require('mongoose')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
```

## build files

in client/build
[index.html](react/client/build/index.html)
[style.css](react/client/build/style.css)

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/style.css">
    <title>main</title>
  </head>
  <body>
    <h2>Welcome</h2>
    <div id="app">
    <script src='bundle.js'></script>
    </div>
  </body>
</html>
```

### style.css

just style it to suit your needs atm, we will come back to it later
```css
body {
  background-color: #333;
  color: orange;
}

li {
  display: none;
}

a {
  display: none;
}

```
I like dark background-color and soft low frequencies colors
