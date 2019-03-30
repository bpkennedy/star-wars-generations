FROM node:lts-alpine

WORKDIR /app
COPY package*.json ./

RUN CI=true npm install
COPY . .
RUN npm run build
CMD npm run serve

EXPOSE 8080
