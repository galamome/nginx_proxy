# Stage 1
ARG NODE_VERSION=18.17.1
ARG ALPINE_VERSION=alpine3.18

# ==== CONFIGURE =====
# Use a Node 18 base image
FROM node:${NODE_VERSION}-${ALPINE_VERSION} as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build --prod

# Stage 2

EXPOSE 4200
# Disable host check to prevent "Invalid host header"
CMD ng serve --host 0.0.0.0 --disable-host-check