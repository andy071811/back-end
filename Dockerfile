FROM node:18-alpine

# Tell node we are in production
ENV NODE_ENV=production

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