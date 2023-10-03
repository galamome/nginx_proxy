ARG NGINX_VERSION=1.25.2
ARG ALPINE_VERSION=alpine3.18

FROM nginx:${NGINX_VERSION}-${ALPINE_VERSION}

# Copy the NGinx configuration (that is in fact a template, with variables to be replaced at run)
COPY ./templates/default.conf /etc/nginx/templates/default.conf.template

# Copy the certificates
COPY ./certs/ /etc/nginx/ssl/