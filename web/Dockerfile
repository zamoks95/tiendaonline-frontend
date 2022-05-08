# base image
FROM node:14.15.0

ARG STRAPI_PAGE
ARG GTAG
ARG PAGE_URL

COPY . /app/
WORKDIR /app

RUN yarn install
RUN yarn clean
RUN yarn build

EXPOSE 9000

HEALTHCHECK --interval=15s --timeout=5s CMD curl -f http://0.0.0.0:9000 || exit 

CMD ["gatsby","serve","-H", "0.0.0.0"]

