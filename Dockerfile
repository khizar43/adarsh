# pull official base image
FROM node:12.2.0-alpine as build

#working directory of containerized app
WORKDIR /app

#copy the react app to the container
COPY . /app/

#prepare the container for building react

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build

#prepare nginx

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire for nginx
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
