#!/bin/sh

set -x

source config.sh

node mqttTest.js \
--privateKey=$PRIVATEKEY \
--clientCert=$CLIENTCERT \
--caCert=$CACERT \
--Host=$HOST \
--clientId=sdk-nodejs-50-sub-limt \
--50-Sub-Limit=true

