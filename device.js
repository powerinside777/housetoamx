var mqtt    = require('mqtt');
var async = require('async');
var MQTT_HOST = "mqtt://10.0.0.61"//process.env.MQTT_BROKER;
var MQTT_BROKER_USER = ""//process.env.MQTT_BROKER_USER;
var MQTT_BROKER_PASS = ""//process.env.MQTT_BROKER_PASS;

var net = require('net');

socket = net.connect("8083", "10.0.0.100");
var settings = {
    username:MQTT_BROKER_USER,
    password:MQTT_BROKER_PASS
}
var q = async.queue(function (task, callback) {
  socket.write(task);
  callback();
}, 12);

var mqtt_client  = mqtt.connect(MQTT_HOST,settings);
mqtt_client.on('connect', function () {
  mqtt_client.subscribe('house/lights/livingroom');
  mqtt_client.subscribe('house/lights/frountwall');
  mqtt_client.subscribe('house/lights/frontpourch');
  mqtt_client.subscribe('house/lights/hallway');
  mqtt_client.subscribe('house/lights/masterbed');
  mqtt_client.subscribe('house/lights/alfresco');
  mqtt_client.subscribe('house/lights/kitchen');
  mqtt_client.subscribe('house/lights/dinning');
  mqtt_client.subscribe('house/lights/studio');
  mqtt_client.subscribe('house/lights/isabella');
  mqtt_client.subscribe('house/lights/masterbathroom');

  console.log('MQTT:','connected');

});



mqtt_client.on('message', function (topic, message) {

      if (topic == 'house/lights/livingroom') {
        //socket.write("Lights-living room=" + message)
        q.push("Lights-living room=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/frountwall') {
        q.push("Lights-front wall=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/frontpourch') {
        //socket.write("Lights-front pourch=" + message);
        q.push("Lights-front pourch=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/hallway') {
        q.push("Lights-hall way=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/masterbed') {

        q.push("Lights-master bed=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/masterbathroom') {
        q.push("Lights-master bathroom=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/isabella') {
        q.push("Lights-isabella=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/studio') {
        q.push("Lights-studio=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/dinning') {
        q.push("Lights-dinning=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/kitchen') {
        q.push("Lights-kitchen=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');

        });
      }
      else if (topic == 'house/lights/alfresco') {
        q.push("Lights-alfresco=" + message, function (err, result) {
          if (err) { return callback(err); }
          console.log('finished processing url!');
        });
      }
      else
        console.log('conected')


  console.log('yip')
});

socket.on('connect', function() {
  console.log('connected')

})
socket.on('close', function() {

  console.log('parent connection closed');
  setTimeout(function () {
    socket.connect("8083", "10.0.0.100")
  }, 1000)
});
socket.on('error', function(err) {
  console.log(err)

});
