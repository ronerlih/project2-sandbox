### Express Sequelize Box

#### Stack 
*Model-View-Controller*
* node 
* express
* sequelize
* mySQL

#### Prerequsits
* node version ^12
* Heroku command line tools

#### Running Locally 

* Clone or copy the repo

* Using mySQL workbench create a test database: `CREATE DATABASE database_test`
* Inside the root folder run: `npm i` & `npm start`

#### Deploy to Heroku

* create a github repo and protect the master branch and other prefrences.

* From the root folder, using the command line run:
    * create a Heroku app and heroku repo setting: `heroku create`.
    * open heroku dashboard and app, choose a new add-on: *Jaws_DB*.
    * make a commit: `git add .` & `git commit -m "commig msg"`.
    * push to the heroku repo: `git push heroku master` or alternatively connect heroku app to github repo (from heroku dashboard -> app -> deploy).
