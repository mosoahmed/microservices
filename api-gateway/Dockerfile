# gateway latest version of node image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy all files to the container
COPY . .

# build the app
RUN npm run build

# expose port 3000
EXPOSE 3000

# run the app
CMD ["npm", "run", "start:prod"]
