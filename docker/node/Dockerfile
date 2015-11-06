FROM node
RUN apt-get update -qq && apt-get install -qqy \
    ssl-cert

RUN npm install express && npm install serve-static

WORKDIR /src

EXPOSE 80
