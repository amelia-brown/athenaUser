FROM node:argon
RUN mkdir -p /usr/src/athenaUser
WORKDIR /usr/src/athenaUser
COPY package.json /usr/src/athenaUser/
RUN npm install
COPY . /urs/src/athenaUser
EXPOSE 3001
RUN npm start
