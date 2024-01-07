FROM oven/bun as build

WORKDIR /app

COPY bun.lockb .
COPY package.json .

RUN bun install

COPY . /app

RUN bun run build

FROM nginx:stable-bullseye

COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
