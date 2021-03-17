FROM node:15-alpine
COPY . .
RUN npm ci
ENTRYPOINT [ "node" ]
CMD [ "app.js" ]