FROM resin/raspberry-pi-alpine-node:latest
COPY /usr/bin/qemu-arm-static /usr/bin/qemu-arm-static
COPY ./shell/sh-shim /usr/bin/sh-shim
RUN /usr/bin/qemu-arm-static cp /bin/sh /bin/sh.real
COPY ./shell/sh-shim /bin/sh 
RUN mkdir -p /home/data
COPY . /home/data
WORKDIR /home/data
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm","start"]



