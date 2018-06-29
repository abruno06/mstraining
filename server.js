const express = require('express')
const os = require('os')
const app = express()

const Eureka = require('eureka-js-client').Eureka;

// example configuration
var clientInformation = {
  'instance': {
    'app': process.env.APP,
    'hostName': '172.20.61.23',
    'ipAddr': '172.20.61.23',
     'port': {
      '$': 3002,
      '@enabled': 'true'
    },
    'vipAddress': '172.20.61.23',
    'dataCenterInfo': {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      'name': 'MyOwn'
    }
  },
  eureka: {
    'host': process.env.EUREKASRV,
    'port': process.env.EUREKAPORT,
'servicePath': '/eureka/apps/'
  }
};

console.log(clientInformation);
const client = new Eureka(clientInformation);

app.get('/ping', (req, res) => res.send(`{"servername": "${os.hostname}"}`))

app.listen(3002, () => console.log('listening on port 3002'))

function connectToEureka() {              
    client.logger.level('debug');  
    client.start(function(error) {
    console.log('########################################################');
    console.log(JSON.stringify(error) || 'Eureka registration complete');   }); }



connectToEureka();


//process.on('SIGINT', function() {
//    console.log("Caught interrupt signal");
//
//     if (i_should_exit)
//{    client.stop(function(error) {
//    console.log('########################################################');
//    console.log(JSON.stringify(error) || 'Eureka registration stopped');  
// process.exit();
// });
//}
//});


