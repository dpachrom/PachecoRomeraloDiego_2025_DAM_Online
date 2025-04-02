FROM node:22.14-alpine3.20

WORKDIR /app

ENV PORT=3000

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000


CMD ["npm", "start"]
