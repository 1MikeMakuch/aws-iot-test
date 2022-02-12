
# AWS IOT test

This is a Node.js script so 1st do;

    $ npm install

You will need to download the auth certificates from AWS IOT page: https://us-west-2.console.aws.amazon.com/iot/home

And you will need to create a config file with a few environment variables;

    $ cp config.sh.sample config.sh

And modify config.sh to suit your environment.

## 50 Subscription Limit per connection

Illustrates the AWS IOT limit of 50 subscriptions per connection. Note that this is a subscription limit not a topic limit.

    $ bash 50-sub-limit.sh

    You will see 50 subscriptions succeed then an exception is thrown on the 51st.

## Single subscription with wildcard

Will publish 1k topics, illustrating that an mqtt client can receive an unlimited number of different topics. This shows that there is not a limit on the number of topics that can be received.

  In one shell run

      $ bash sub-1k-topics.sh

  In another shell run

      $ bash pub-1k-topics.sh
