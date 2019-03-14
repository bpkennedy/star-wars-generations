FROM node:lts-alpine

RUN npm install -g nodemon
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
CMD npm run serve

EXPOSE 3000
