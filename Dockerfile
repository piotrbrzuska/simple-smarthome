# specify the node base image with your desired version node:<version>
FROM node:10-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn
EXPOSE 80
CMD ["yarn", "run", "start:prod"]