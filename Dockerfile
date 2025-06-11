# Stage 1: Build dependencies
FROM node:22.15.1-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

# Stage 2: Production Image
FROM node:22.15.1-alpine

# Tạo user không root để tăng bảo mật
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app
COPY --from=builder /app ./

ENV NODE_ENV=production
RUN npm prune --production

# Mở port ứng dụng (nên cấu hình qua biến môi trường trong Docker Compose)
EXPOSE 8000

USER appuser

CMD ["node", "src/index.js"]
