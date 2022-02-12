#!/bin/sh

set -x

source config.sh

node mqttTest.js \
--privateKey=$PRIVATEKEY \
--clientCert=$CLIENTCERT \
--caCert=$CACERT \
--Host=$HOST \
--clientId=sdk-nodejs-sub-1k \
--sub-1k-topics=true
