FROM node:24.9 AS build

WORKDIR /app

COPY js/ ./js/
RUN cd js && npm install && npm run build

FROM caddy

WORKDIR /usr/share/caddy

COPY --from=build /app/js/dist/ .

RUN addgroup -g 1000 caddy && adduser -u 1000 -G caddy -s /bin/sh -D caddy

RUN chown caddy:caddy /config/caddy && \
    chmod 700 /config/caddy && \
    chown -R caddy:caddy /data && \
    chmod -R 700 /data

USER caddy

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]