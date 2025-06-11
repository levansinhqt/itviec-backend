# Stage 1: Build dependencies
FROM node:22.15.1-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Stage 2: Production Image
FROM node:22.15.1-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=builder /app ./

RUN npm prune --production

ENV NODE_ENV=production

EXPOSE 8000

USER appuser

CMD ["node", "src/index.js"]
