FROM node:12.18.1
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV HOST=0.0.0.0
CMD ["npm", "start"]
