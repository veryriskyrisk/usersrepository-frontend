FROM node:10.16.0-alpine
WORKDIR /app
COPY . /app
EXPOSE 4000
CMD ["node", "dist/server"]
