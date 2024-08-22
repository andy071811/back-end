FROM node:18-alpine

# Create an app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

# Run NPM install
RUN npm install

# Copy bundle app source
COPY . .

# Expose the port
EXPOSE 3000

CMD [ "npm", "start" ]