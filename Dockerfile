# ========================
# 1️⃣ Build Stage
# ========================
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ========================
# 2️⃣ Nginx Stage
# ========================
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 🔥 IMPORTANT: copy ONLY browser build
COPY --from=build /app/dist/angular-essentials/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
