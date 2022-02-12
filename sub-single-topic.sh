#!/bin/sh

set -x

source config.sh

node mqttTest.js \
--privateKey=$PRIVATEKEY \
--clientCert=$CLIENTCERT \
--caCert=$CACERT \
--Host=$HOST \
--clientId=sdk-nodejs-sub-single \
--sub-single-topic=true
