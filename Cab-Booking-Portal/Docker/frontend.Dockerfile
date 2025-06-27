# docker/frontend.Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Production image
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"]
