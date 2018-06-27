const express = require('express')
const os = require('os')
const app = express()

app.get('/', (req, res) => res.send(`hello hostname: ${os.hostname}`))

app.listen(3000, () => console.log('listening on port 3000'))
