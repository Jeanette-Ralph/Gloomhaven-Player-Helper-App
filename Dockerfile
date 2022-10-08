FROM node:16-alpine AS builder
WORKDIR /app
COPY . /app

RUN apk add --no-cache libc6-compat
RUN npm run install
RUN npm run build

FROM node:16-alpine AS runner
WORKDIR /app

COPY --from=builder /app/ ./
EXPOSE 3001

CMD ["npm", "run", "deploy"]