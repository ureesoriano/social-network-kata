FROM node:13.1-alpine

WORKDIR /code
COPY package.json /code/

RUN npm install
