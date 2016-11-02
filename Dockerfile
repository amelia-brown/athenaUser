FROM node:argon
RUN console.log(process.env)
#RUN mkdir -p /usr/src/athenaUser
#WORKDIR /usr/src/athenaUser
#COPY package.json /usr/src/athenaUser/
#RUN npm install
#COPY . /usr/src/athenaUser
#EXPOSE 3001
#RUN npm start
