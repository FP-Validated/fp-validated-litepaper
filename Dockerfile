FROM node:20-bookworm-slim AS builder
WORKDIR /app
COPY modern/package.json modern/package-lock.json ./
RUN npm ci
COPY modern/ ./
RUN npm run build

FROM nginx:1.27-alpine AS runner
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 8080
USER 101:101
