FROM node:argon
RUN mkdir -p /usr/src/athenaUser
WORKDIR /usr/src/athenaUser
COPY package.json /usr/src/athenaUser/
RUN npm install
COPY . /usr/src/athenaUser
EXPOSE 3001
CMD npm start
