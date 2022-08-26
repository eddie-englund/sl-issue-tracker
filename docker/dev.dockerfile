FROM node:18
WORKDIR /app

VOLUME ["/app"]
CMD yarn install --frozen-lockfile --production=false && yarn dev
