FROM node:10.13.0-alpine

WORKDIR /code
COPY package.json /code/

RUN npm install
