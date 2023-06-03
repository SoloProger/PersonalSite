FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY . .

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
