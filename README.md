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
sudo mongod
```

ok greate now lets move on to the dependencies we will need to have a signUp/signIn ect
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
<br>

ok good now we can move on to building our files up!

### folders

start by making a [client](FinalProject/react/client) within your react folder
```sh
mkdir client
```
then cd into client and create two more called [build](FinalProject/react/client/build) and [src](FinalProject/react/client/src)
```sh
mkdir build src
```
<br>

## basic files

[server.js](react/server.js)

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

## basic client files

[app.js](react/client/src/app.js)
[style.css](react/client/build/style.css)


### app.js

```js
var path = require('path')
var express = require('express')
var http = require('http')
var mongoose = require('mongoose')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
```
