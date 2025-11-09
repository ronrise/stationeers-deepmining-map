FROM node:24.9 AS build

WORKDIR /app

COPY js/ ./js/
RUN cd js && npm install && npm run build

FROM caddy

WORKDIR /usr/share/caddy

COPY --from=build /app/js/dist/ .