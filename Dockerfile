FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm config set registry https://registry.npmjs.org/
RUN npm config rm proxy
RUN npm config rm https-proxy
RUN npm install
COPY . .
RUN npm run build
ENV HOST=0.0.0.0
CMD ["npm", "start"]
