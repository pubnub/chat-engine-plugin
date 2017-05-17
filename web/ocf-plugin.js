(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

    const package = require('../package.json');
    window.OpenChatFramework.plugin[package.name] = require('../plugin.js');

})();

},{"../package.json":2,"../plugin.js":3}],2:[function(require,module,exports){
module.exports={
  "name": "ocf-plugin",
  "version": "0.0.2",
  "main": "./plugin.js",
  "dependencies": {
    "browserify": "^14.3.0",
    "chalk": "^1.1.3",
    "commander": "^2.9.0",
    "gulp": "^3.9.1",
    "rimraf": "^2.6.1",
    "vinyl-source-stream": "^1.1.0",
    "ocf": "^0.0.2"
  },
  "bin": {
    "ocf-plugin": "./gulpfile.js"
  },
  "devDependencies": {
    "chai": "^3.5.0",
    "mocha": "^3.3.0"
  }
}

},{}],3:[function(require,module,exports){
module.exports = (config) => {

    // create empty config object if not supplied
    config = config || {};

    // define defaults if config is empty
    config.send = config.send || " pub_append";
    config.subscribe = config.subscribe || " sub_append";

    // define middleware to run right before a message leaves the client
    // all OCF functions have run by now
    let send = {
        message: function(payload, next) {

            // append config.send to the text supplied in the event
            payload.data.text += config.send;

            // continue along middleware
            next(null, payload);

        }
    };

    // define middleware to run after a message has been received and OCF has processed it
    let broadcast = {
        message: function(payload, next) {
        
            // append config.broadcast text to the payload
            payload.data.text += config.broadcast;

            // continue along middleware
            next(null, payload);

        }
    };

    // middleware tells the framework to use these functions when 
    // messages are sent or received
    return {
        middleware: {
            send: send, 
            broadcast: broadcast
        }
    }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wL3dyYXAuanMiLCJwYWNrYWdlLmpzb24iLCJwbHVnaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgcGFja2FnZSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuICAgIHdpbmRvdy5PcGVuQ2hhdEZyYW1ld29yay5wbHVnaW5bcGFja2FnZS5uYW1lXSA9IHJlcXVpcmUoJy4uL3BsdWdpbi5qcycpO1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJvY2YtcGx1Z2luXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4yXCIsXG4gIFwibWFpblwiOiBcIi4vcGx1Z2luLmpzXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeMTQuMy4wXCIsXG4gICAgXCJjaGFsa1wiOiBcIl4xLjEuM1wiLFxuICAgIFwiY29tbWFuZGVyXCI6IFwiXjIuOS4wXCIsXG4gICAgXCJndWxwXCI6IFwiXjMuOS4xXCIsXG4gICAgXCJyaW1yYWZcIjogXCJeMi42LjFcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCJeMS4xLjBcIixcbiAgICBcIm9jZlwiOiBcIl4wLjAuMlwiXG4gIH0sXG4gIFwiYmluXCI6IHtcbiAgICBcIm9jZi1wbHVnaW5cIjogXCIuL2d1bHBmaWxlLmpzXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiY2hhaVwiOiBcIl4zLjUuMFwiLFxuICAgIFwibW9jaGFcIjogXCJeMy4zLjBcIlxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChjb25maWcpID0+IHtcblxuICAgIC8vIGNyZWF0ZSBlbXB0eSBjb25maWcgb2JqZWN0IGlmIG5vdCBzdXBwbGllZFxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICAgIC8vIGRlZmluZSBkZWZhdWx0cyBpZiBjb25maWcgaXMgZW1wdHlcbiAgICBjb25maWcuc2VuZCA9IGNvbmZpZy5zZW5kIHx8IFwiIHB1Yl9hcHBlbmRcIjtcbiAgICBjb25maWcuc3Vic2NyaWJlID0gY29uZmlnLnN1YnNjcmliZSB8fCBcIiBzdWJfYXBwZW5kXCI7XG5cbiAgICAvLyBkZWZpbmUgbWlkZGxld2FyZSB0byBydW4gcmlnaHQgYmVmb3JlIGEgbWVzc2FnZSBsZWF2ZXMgdGhlIGNsaWVudFxuICAgIC8vIGFsbCBPQ0YgZnVuY3Rpb25zIGhhdmUgcnVuIGJ5IG5vd1xuICAgIGxldCBzZW5kID0ge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbihwYXlsb2FkLCBuZXh0KSB7XG5cbiAgICAgICAgICAgIC8vIGFwcGVuZCBjb25maWcuc2VuZCB0byB0aGUgdGV4dCBzdXBwbGllZCBpbiB0aGUgZXZlbnRcbiAgICAgICAgICAgIHBheWxvYWQuZGF0YS50ZXh0ICs9IGNvbmZpZy5zZW5kO1xuXG4gICAgICAgICAgICAvLyBjb250aW51ZSBhbG9uZyBtaWRkbGV3YXJlXG4gICAgICAgICAgICBuZXh0KG51bGwsIHBheWxvYWQpO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZGVmaW5lIG1pZGRsZXdhcmUgdG8gcnVuIGFmdGVyIGEgbWVzc2FnZSBoYXMgYmVlbiByZWNlaXZlZCBhbmQgT0NGIGhhcyBwcm9jZXNzZWQgaXRcbiAgICBsZXQgYnJvYWRjYXN0ID0ge1xuICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbihwYXlsb2FkLCBuZXh0KSB7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gYXBwZW5kIGNvbmZpZy5icm9hZGNhc3QgdGV4dCB0byB0aGUgcGF5bG9hZFxuICAgICAgICAgICAgcGF5bG9hZC5kYXRhLnRleHQgKz0gY29uZmlnLmJyb2FkY2FzdDtcblxuICAgICAgICAgICAgLy8gY29udGludWUgYWxvbmcgbWlkZGxld2FyZVxuICAgICAgICAgICAgbmV4dChudWxsLCBwYXlsb2FkKTtcblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIG1pZGRsZXdhcmUgdGVsbHMgdGhlIGZyYW1ld29yayB0byB1c2UgdGhlc2UgZnVuY3Rpb25zIHdoZW4gXG4gICAgLy8gbWVzc2FnZXMgYXJlIHNlbnQgb3IgcmVjZWl2ZWRcbiAgICByZXR1cm4ge1xuICAgICAgICBtaWRkbGV3YXJlOiB7XG4gICAgICAgICAgICBzZW5kOiBzZW5kLCBcbiAgICAgICAgICAgIGJyb2FkY2FzdDogYnJvYWRjYXN0XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
