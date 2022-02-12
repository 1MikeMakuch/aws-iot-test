
# AWS IOT test


## 50 Subscription Limit per connection

Illustrates the AWS IOT limit of 50 subscriptions per connection. Note that this is a subscription limit not a topic limit.

    $ bash 50-sub-limit.sh

    You will see 50 subscriptions succeed then an exception is thrown on the 51st.

## Single subscription with wildcard

Will publish 1k topics, illustrating that an mqtt client can receive an unlimited number of different topics. This shows that there is not a limit on the number of topics that can be received.

  In one session run

      $ bash sub-1k-topics.sh

  In another session run

      $ bash pub-1k-topics.sh

## Single subscription on 1 static topic

Publishes 1k messages on the same topic. No discernable difference is observed between the wildcard vs static topic examples.


  In one session run

      $ bash sub-single-topic.sh

  In another session run

      $ bash pub-single-topic.sh
