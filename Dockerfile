FROM node:18-alpine

ARG PORT
ARG MY_EMAIL
ARG MY_EMAIL_PASS
ARG SEND_TO_EMAIL
ARG MAIL_SERVICE
ARG DB_USER
ARG DB_PASS
ARG CLUSTER_URL

# Tell node we are in production
ENV NODE_ENV=production

ENV PORT=${PORT}
ENV MY_EMAIL=${MY_EMAIL}
ENV MY_EMAIL_PASS=${MY_EMAIL_PASS}
ENV SEND_TO_EMAIL=${SEND_TO_EMAIL}
ENV MAIL_SERVICE=${MAIL_SERVICE}
ENV DB_USER=${DB_USER}
ENV DB_PASS=${DB_PASS}
ENV CLUSTER_URL=${CLUSTER_URL}

# Create an app directory
WORKDIR /app

# Install dependencies
COPY package.json /app

# copy certs over
#COPY ssl/ /usr/local/share/ca-certificates/

# Run NPM install
RUN npm install && apk add bash --no-cache && apk add curl && \
    apk --no-cache update && apk --no-cache add ca-certificates && update-ca-certificates

# Copy bundle app source
COPY . .

# Expose the port
#EXPOSE 3000

CMD [ "npm", "start" ]