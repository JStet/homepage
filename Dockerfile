FROM node:current-buster-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm config set registry https://registry.npmjs.org/
RUN npm config rm proxy
RUN npm config rm https-proxy
ENV NODE_ENV=production
RUN npm install --production
COPY . .
RUN npm run build
ENV HOST=0.0.0.0
CMD ["npm", "start"]
