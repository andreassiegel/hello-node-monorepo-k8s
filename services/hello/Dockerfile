FROM node:10-alpine
MAINTAINER Andreas Siegel

WORKDIR /home/node

COPY services/hello/dist /home/node
COPY services/hello/package.json /home/node/package.json

RUN npm install --production

COPY services/hello/node_modules /home/node/node_modules

EXPOSE 8080
ENTRYPOINT ["node", "index.js"]
