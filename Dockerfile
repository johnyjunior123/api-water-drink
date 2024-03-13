FROM node:16-alpine

RUN apk add --no-cache bash

USER root
WORKDIR /home/node/app
RUN chown -R 1000:1000 /home/node/app 
RUN chown -R 1000:1000 /usr/local/lib/node_modules
RUN chown -R 1000:1000 /usr/local/bin

COPY ./package.json /home/node/app
RUN yarn 

COPY . .

CMD ["yarn", "dev"]