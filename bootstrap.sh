#!/bin/bash

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get upgrade

# Git
sudo apt-get install -y git
git config --global url."https://".insteadOf git:// 

# Node.js
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs

# MongoDb
sudo apt-get install -y mongodb-org
sudo apt-get install -y libkrb5-dev

# Global node.js packages
sudo npm install -g gulp-cli
sudo npm install -g grunt-cli
sudo npm install -g bower
sudo npm install -g node-gyp
sudo npm install -g browserify
sudo npm install -g yo
sudo npm install -g generator-meanjs