FROM node:alpine

RUN npm install yarn -g

WORKDIR /app

COPY package.json /app

RUN yarn

COPY src /app/src

EXPOSE 3000

CMD ["node","src/app.js"]