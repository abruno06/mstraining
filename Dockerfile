FROM resin/raspberry-pi-alpine-node:latest

RUN mkdir -p /home/data
COPY . /home/data
WORKDIR /home/data
RUN npm install
EXPOSE 3002
ENTRYPOINT ["npm","start"]



