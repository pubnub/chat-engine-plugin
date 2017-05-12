(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {

    const namespace = require('../package.json')['open-chat-framework']['namespace'];
    window.OpenChatFramework.plugin[namespace] = require('../plugin.js');

})();

},{"../package.json":2,"../plugin.js":3}],2:[function(require,module,exports){
module.exports={
  "name": "ocf-plugin",
  "version": "0.0.1",
  "main": "./plugin.js",
  "open-chat-framework": {
    "namespace": "append"
  },
  "dependencies": {
    "browserify": "^14.3.0",
    "chalk": "^1.1.3",
    "commander": "^2.9.0",
    "gulp": "^3.9.1",
    "rimraf": "^2.6.1",
    "vinyl-source-stream": "^1.1.0"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wL3dyYXAuanMiLCJwYWNrYWdlLmpzb24iLCJwbHVnaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IG5hbWVzcGFjZSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpWydvcGVuLWNoYXQtZnJhbWV3b3JrJ11bJ25hbWVzcGFjZSddO1xuICAgIHdpbmRvdy5PcGVuQ2hhdEZyYW1ld29yay5wbHVnaW5bbmFtZXNwYWNlXSA9IHJlcXVpcmUoJy4uL3BsdWdpbi5qcycpO1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJvY2YtcGx1Z2luXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwibWFpblwiOiBcIi4vcGx1Z2luLmpzXCIsXG4gIFwib3Blbi1jaGF0LWZyYW1ld29ya1wiOiB7XG4gICAgXCJuYW1lc3BhY2VcIjogXCJhcHBlbmRcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjE0LjMuMFwiLFxuICAgIFwiY2hhbGtcIjogXCJeMS4xLjNcIixcbiAgICBcImNvbW1hbmRlclwiOiBcIl4yLjkuMFwiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjkuMVwiLFxuICAgIFwicmltcmFmXCI6IFwiXjIuNi4xXCIsXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiXjEuMS4wXCJcbiAgfSxcbiAgXCJiaW5cIjoge1xuICAgIFwib2NmLXBsdWdpblwiOiBcIi4vZ3VscGZpbGUuanNcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJjaGFpXCI6IFwiXjMuNS4wXCIsXG4gICAgXCJtb2NoYVwiOiBcIl4zLjMuMFwiXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKGNvbmZpZykgPT4ge1xuXG4gICAgLy8gY3JlYXRlIGVtcHR5IGNvbmZpZyBvYmplY3QgaWYgbm90IHN1cHBsaWVkXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gICAgLy8gZGVmaW5lIGRlZmF1bHRzIGlmIGNvbmZpZyBpcyBlbXB0eVxuICAgIGNvbmZpZy5zZW5kID0gY29uZmlnLnNlbmQgfHwgXCIgcHViX2FwcGVuZFwiO1xuICAgIGNvbmZpZy5zdWJzY3JpYmUgPSBjb25maWcuc3Vic2NyaWJlIHx8IFwiIHN1Yl9hcHBlbmRcIjtcblxuICAgIC8vIGRlZmluZSBtaWRkbGV3YXJlIHRvIHJ1biByaWdodCBiZWZvcmUgYSBtZXNzYWdlIGxlYXZlcyB0aGUgY2xpZW50XG4gICAgLy8gYWxsIE9DRiBmdW5jdGlvbnMgaGF2ZSBydW4gYnkgbm93XG4gICAgbGV0IHNlbmQgPSB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKHBheWxvYWQsIG5leHQpIHtcblxuICAgICAgICAgICAgLy8gYXBwZW5kIGNvbmZpZy5zZW5kIHRvIHRoZSB0ZXh0IHN1cHBsaWVkIGluIHRoZSBldmVudFxuICAgICAgICAgICAgcGF5bG9hZC5kYXRhLnRleHQgKz0gY29uZmlnLnNlbmQ7XG5cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIGFsb25nIG1pZGRsZXdhcmVcbiAgICAgICAgICAgIG5leHQobnVsbCwgcGF5bG9hZCk7XG5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBkZWZpbmUgbWlkZGxld2FyZSB0byBydW4gYWZ0ZXIgYSBtZXNzYWdlIGhhcyBiZWVuIHJlY2VpdmVkIGFuZCBPQ0YgaGFzIHByb2Nlc3NlZCBpdFxuICAgIGxldCBicm9hZGNhc3QgPSB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKHBheWxvYWQsIG5leHQpIHtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBhcHBlbmQgY29uZmlnLmJyb2FkY2FzdCB0ZXh0IHRvIHRoZSBwYXlsb2FkXG4gICAgICAgICAgICBwYXlsb2FkLmRhdGEudGV4dCArPSBjb25maWcuYnJvYWRjYXN0O1xuXG4gICAgICAgICAgICAvLyBjb250aW51ZSBhbG9uZyBtaWRkbGV3YXJlXG4gICAgICAgICAgICBuZXh0KG51bGwsIHBheWxvYWQpO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gbWlkZGxld2FyZSB0ZWxscyB0aGUgZnJhbWV3b3JrIHRvIHVzZSB0aGVzZSBmdW5jdGlvbnMgd2hlbiBcbiAgICAvLyBtZXNzYWdlcyBhcmUgc2VudCBvciByZWNlaXZlZFxuICAgIHJldHVybiB7XG4gICAgICAgIG1pZGRsZXdhcmU6IHtcbiAgICAgICAgICAgIHNlbmQ6IHNlbmQsIFxuICAgICAgICAgICAgYnJvYWRjYXN0OiBicm9hZGNhc3RcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
