# node version
FROM node:carbon

# Create app directory 
WORKDIR /usr/src/nba-backend

# Copy package.json and yarlock files
COPY package*.json ./

RUN yarn

# Bundle app source
COPY . .

EXPOSE 8000

CMD [ "yarn", "start" ]