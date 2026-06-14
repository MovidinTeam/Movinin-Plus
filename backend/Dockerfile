# syntax=docker/dockerfile:1

FROM node:lts-alpine
WORKDIR /movinin/backend
COPY ./backend ./
COPY ./packages /movinin/packages
RUN npm install
RUN npm run build

CMD ["sh", "-c", "node dist/src/setup/setup.js && node --import ./dist/src/monitoring/instrument.js dist/src"]
EXPOSE 4004