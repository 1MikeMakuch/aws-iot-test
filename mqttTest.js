const deviceModule = require('aws-iot-device-sdk').device

const getopts = require('getopts')

let opts = {options: {}}
opts = getopts(process.argv.slice(2))

console.log('opts', JSON.stringify(opts, null, 2))
//process.exit()

const device = deviceModule({
  keyPath: opts.privateKey,
  certPath: opts.clientCert,
  caPath: opts.caCert,
  clientId: opts.clientId,
  region: opts.region,
  baseReconnectTimeMs: opts.baseReconnectTimeMs,
  keepalive: opts.keepAlive,
  protocol: opts.Protocol,
  port: opts.Port,
  host: opts.Host,
  debug: opts.Debug
})

if (opts['50-Sub-Limit']) {
  // The 51st call throws an exception
  for (let i = 1; i < 55; i++) {
    let topic = 'test000/' + i
    device.subscribe(topic)
    console.log('subscribe topic:', topic)
  }
}

if (opts['sub-1k-topics']) {
  let topic = 'test000/+'
  device.subscribe(topic)
  console.log('subscribe topic:', topic)
}

if (opts['sub-single-topic']) {
  let topic = 'test000'
  device.subscribe(topic)
  console.log('subscribe topic:', topic)
}

device.on('connect', async function (data) {
  console.log('connect', JSON.stringify(data))

  // pub

  if (opts['pub-1k-topics']) {
    for (let i = 0; i < 1000; i++) {
      let topic = 'test000/' + i
      let payload = {message: 'payload:' + i}
      device.publish(topic, JSON.stringify(payload))
      console.log('published', 'topic:' + topic, JSON.stringify(payload))
    }
  }
  if (opts['pub-single-topic']) {
    for (let i = 0; i < 1000; i++) {
      let topic = 'test000'
      let payload = {message: 'payload:' + i}
      device.publish(topic, JSON.stringify(payload))
      console.log('published', 'topic:' + topic, JSON.stringify(payload))
      //await new Promise(res => setTimeout(res, 2000))
    }
  }
})

device.on('close', function (data) {
  console.log('close')
})
device.on('reconnect', function (data) {
  console.log('reconnect')
})
device.on('offline', function (data) {
  console.log('offline')
})
device.on('error', function (error) {
  console.log('error', error)
})
device.on('message', function (topic, payload) {
  console.log('received', 'topic:' + topic, payload.toString())
})
