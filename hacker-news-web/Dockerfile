FROM node:alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build --prod

RUN ls -l /usr/src/app/dist/

FROM nginx:alpine

COPY --from=build /usr/src/app/dist/hacker-news-web /usr/share/nginx/html

RUN ls -l /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4500

CMD ["nginx", "-g", "daemon off;"]
