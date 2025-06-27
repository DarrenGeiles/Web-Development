# docker/backend.Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy source files
COPY backend/ .

# Set env and expose
ENV NODE_ENV=production
EXPOSE 5000

CMD ["node", "app.js"]
