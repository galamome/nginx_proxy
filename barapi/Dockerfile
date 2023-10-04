ARG NODE_VERSION=18.17.1
ARG ALPINE_VERSION=alpine3.18

# ==== CONFIGURE =====
# Use a Node 18 base image
FROM node:${NODE_VERSION}-${ALPINE_VERSION}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]