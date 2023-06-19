# Stage 1

FROM node:lts-alpine AS module-install

# Create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Stage 2

FROM node:lts-alpine

COPY --from=module-install /usr/src/app /usr/src/app
WORKDIR /usr/src/app
EXPOSE 5000
CMD ["node", "index.js"]