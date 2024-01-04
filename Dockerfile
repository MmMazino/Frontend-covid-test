FROM node:20-alpine

WORKDIR /app/

COPY package.json .

RUN npm install

COPY package.json .

RUN npm install typescript

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm","start"]