
Inspired from:

- https://javascript.plainenglish.io/using-nginx-as-a-reverse-proxy-for-containerized-node-js-microservices-e7c4800f05a1
- https://github.com/lakshyajit165/nginx_reverse_proxy

Templated (the variable names come from `.env` file).

## TLS

https://medium.com/@TomVance/local-domains-with-https-469036775818

Generate certificate for the domain:

```bash
# Import the environment variables
source ./nginx/.env
echo "Will generate a certificate for: '${NGINX_SERVER_NAME}'"
cd nginx/certs
mkcert "*.${NGINX_SERVER_NAME}"
```