FROM node:21

# Set the working directory
WORKDIR /usr/src/app

#Set PORT env var to 3000
ENV PORT=3000

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port (default port for Node.js apps is usually 3000)
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
