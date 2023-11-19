FROM node:21.1.0

WORKDIR /usr/src/app

COPY ./package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "index.js" ]