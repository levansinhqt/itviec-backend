# Stage 1: Build dependencies
FROM node:22.15.1-alpine AS builder

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json trước để tối ưu layer cache Docker
COPY package*.json ./

# Cài đặt dependencies bằng npm ci (tối ưu hơn npm install cho CI/CD)
RUN npm ci

# Copy toàn bộ mã nguồn vào container
COPY . .

# Stage 2: Production Image
FROM node:22.15.1-alpine

# Tăng bảo mật: Tạo user không chạy với quyền root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy toàn bộ file đã build từ stage trước
COPY --from=builder /app ./

# Thiết lập biến môi trường NODE_ENV production
ENV NODE_ENV=production

# Loại bỏ các development dependencies
RUN npm prune --production

# Mở port ứng dụng (lưu ý: port thật sự được inject bằng biến môi trường PORT lúc runtime)
EXPOSE 8000

# Chạy dưới quyền user appuser để tăng bảo mật
USER appuser

# Command mặc định khi container start
CMD ["npm", "start"]
