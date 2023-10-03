ARG NGINX_VERSION=1.25.2
ARG ALPINE_VERSION=alpine3.18

FROM nginx:${NGINX_VERSION}-${ALPINE_VERSION}

COPY ./templates/default.conf /etc/nginx/templates/default.conf.template