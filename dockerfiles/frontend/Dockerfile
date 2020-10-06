FROM node:lts-alpine AS build
WORKDIR /workspace

RUN apk add --update yarn

COPY package.json yarn.lock src/assets/dhtmlx ./
RUN yarn --pure-lockfile

COPY . .

ARG COMMIT_HASH
RUN echo "{\"build\": \"${COMMIT_HASH:-dev}\"}" > src/assets/hash.json

RUN yarn add @vue/cli
ARG VUE_MODE=production
RUN yarn build --mode ${VUE_MODE}

FROM nginx:mainline-alpine
WORKDIR /workspace

ENV TZ 'Europe/Berlin'
RUN apk add --update tzdata && rm -rf /var/cache/apk/*

COPY --from=build /workspace/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]