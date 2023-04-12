## Fichier : ./my-progress/Dockerfile
FROM node:18.10.0-alpine3.15

WORKDIR /usr/src/app/my-progress

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]