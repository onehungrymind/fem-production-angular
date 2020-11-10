ARG NODE_VERSION=13-alpine3.10
ARG PORT=4200

FROM node:${NODE_VERSION}

WORKDIR /usr/app
EXPOSE ${PORT}

COPY package.json yarn.lock decorate-angular-cli.js ./

RUN export PATH=:"$PATH:/usr/app/node_modules/.bin:" && \
  yarn

# Copy the default system files
COPY docker/rootfs /

COPY . .

ENV PORT=${PORT}

CMD ["yarn", "serve:web"]

LABEL NODE_VERSION=${NODE_VERSION} \
PORT=${PORT}
