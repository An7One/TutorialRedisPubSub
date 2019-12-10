var redis = require("redis");
var subscriber = redis.createClient();

subscriber.on("message", function(channel, message) {
  console.log("Message: " + message + " on channel: " + channel + " arrived");
});

subscriber.subscribe("notification");
