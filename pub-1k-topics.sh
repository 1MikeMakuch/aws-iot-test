#!/bin/sh

set -x

source config.sh

node mqttTest.js \
--privateKey=$PRIVATEKEY \
--clientCert=$CLIENTCERT \
--caCert=$CACERT \
--Host=$HOST \
--clientId=sdk-nodejs-pub-1k \
--Debug=true \
--pub-1k-topics=true
