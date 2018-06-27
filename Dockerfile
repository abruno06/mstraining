FROM resin/raspberry-pi-alpine-node:latest
COPY bin/qemu-arm /usr/bin/qemu-arm-static
COPY ./shell/sh-shim /usr/bin/sh-shim
RUN ["/usr/bin/qemu-arm-static", "/bin/chmod","+x","/usr/bin/sh-shim"]
RUN ["/usr/bin/qemu-arm-static", "/bin/cp", "/bin/bash", "/bin/sh.real"]
RUN  ["/usr/bin/qemu-arm-static", "/bin/ls","-alh" ,"/bin" ]
RUN  ["/usr/bin/qemu-arm-static", "/bin/mkdir","-p","/home/data" ]
RUN  ["/usr/bin/qemu-arm-static", "/usr/bin/which","npm" ]
#COPY ./shell/sh-shim /bin/sh 
#RUN mkdir -p /home/data
COPY . /home/data
WORKDIR /home/data
#RUN  ["/usr/bin/qemu-arm-static", "/usr/local/bin/npm","install" ]
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm","start"]



