# use the official node image
FROM node:18

#create and change to the app directory
WORKDIR /usr/src/app

#copy the package.json file and package lock file
COPY package*.json ./

#install the dependencies
RUN npm install

#copy the rest of the files
COPY . .

#build the app
RUN npm run build

#expose the port
EXPOSE 3001

#run the app
CMD ["npm", "run", "start:prod"]