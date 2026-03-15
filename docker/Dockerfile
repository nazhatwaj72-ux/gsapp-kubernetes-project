# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . ./

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
