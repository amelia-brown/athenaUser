FROM node:4
RUN mkdir -p /usr/src/athenaUser
WORKDIR /usr/src/athenaUser
COPY package.json /usr/src/athenaUser/
RUN npm install
COPY . /urs/src/athenaUser
EXPOSE 3001
CMD ['npm', 'start']
