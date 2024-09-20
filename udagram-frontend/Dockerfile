### Build
FROM node:16 AS ionic

RUN npm install -g @ionic/cli


## Create app directory
WORKDIR /usr/src/app
## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./udagram-frontend/package*.json ./


RUN npm ci -f --legacy-peer-deps


## Bundle app source
COPY ./udagram-frontend .
RUN ionic build
### Run 
FROM nginx:alpine
#COPY www /usr/share/nginx/html
COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html
