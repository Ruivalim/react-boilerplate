FROM node as build

WORKDIR /app
COPY . /app
RUN yarn -s
RUN yarn build

FROM nginx:1.16.0-alpine

COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
