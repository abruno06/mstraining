const express = require('express')
const os = require('os')
const app = express()

const Eureka = require('eureka-js-client').Eureka;

// example configuration
var clientInformation = {
  "instance": {
    "app": "helloservice",
    "hostName": os.hostname(),
    "ipAddr": "172.20.61.23",
     "port": {
      '$': 3000,
      '@enabled': true
    },
    "vipAddress": "172.20.61.23",
    "dataCenterInfo": {
  '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      "name": "MyOwn"
    }
  },
  "eureka": {
    "host": process.env.EUREKASRV,
    "port": process.env.EUREKAPORT
  }
};

console.log(clientInformation);
const client = new Eureka(clientInformation);

app.get('/', (req, res) => res.send(`{"servername": "${os.hostname}"}`))

app.listen(3002, () => console.log('listening on port 3002'))

function connectToEureka() {              
    client.logger.level('debug');  
    client.start(function(error) {
    console.log('########################################################');
    console.log(JSON.stringify(error) || 'Eureka registration complete');   }); }

 connectToEureka();
