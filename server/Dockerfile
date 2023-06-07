FROM node:lts-buster-slim AS development

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm i 

COPY . /usr/src/app

EXPOSE 8080

CMD [ "npm", "run", "dev" ]



