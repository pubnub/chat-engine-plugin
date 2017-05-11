(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "name": "ocf-plugin",
  "version": "0.0.1",
  "main": "dist/plugin.js",
  "open-chat-framework": {
    "namespace": "append"
  },
  "dependencies": {
    "browserify": "^14.3.0",
    "chalk": "^1.1.3",
    "commander": "^2.9.0",
    "gulp": "^3.9.1",
    "vinyl-source-stream": "^1.1.0"
  },
  "bin": {
    "ocf-plugin": "./gulpfile.js"
  }
}

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
(function() {

    const namespace = require('./package.json')['open-chat-framework']['namespace'];
    window.OpenChatFramework.plugin[namespace] = require('./src/plugin.js');

})();

},{"./package.json":1,"./src/plugin.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvcGx1Z2luLmpzIiwid3JhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJvY2YtcGx1Z2luXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwibWFpblwiOiBcImRpc3QvcGx1Z2luLmpzXCIsXG4gIFwib3Blbi1jaGF0LWZyYW1ld29ya1wiOiB7XG4gICAgXCJuYW1lc3BhY2VcIjogXCJhcHBlbmRcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjE0LjMuMFwiLFxuICAgIFwiY2hhbGtcIjogXCJeMS4xLjNcIixcbiAgICBcImNvbW1hbmRlclwiOiBcIl4yLjkuMFwiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjkuMVwiLFxuICAgIFwidmlueWwtc291cmNlLXN0cmVhbVwiOiBcIl4xLjEuMFwiXG4gIH0sXG4gIFwiYmluXCI6IHtcbiAgICBcIm9jZi1wbHVnaW5cIjogXCIuL2d1bHBmaWxlLmpzXCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoY29uZmlnKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgZW1wdHkgY29uZmlnIG9iamVjdCBpZiBub3Qgc3VwcGxpZWRcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAvLyBkZWZpbmUgZGVmYXVsdHMgaWYgY29uZmlnIGlzIGVtcHR5XG4gICAgY29uZmlnLnNlbmQgPSBjb25maWcuc2VuZCB8fCBcIiBwdWJfYXBwZW5kXCI7XG4gICAgY29uZmlnLnN1YnNjcmliZSA9IGNvbmZpZy5zdWJzY3JpYmUgfHwgXCIgc3ViX2FwcGVuZFwiO1xuXG4gICAgLy8gZGVmaW5lIG1pZGRsZXdhcmUgdG8gcnVuIHJpZ2h0IGJlZm9yZSBhIG1lc3NhZ2UgbGVhdmVzIHRoZSBjbGllbnRcbiAgICAvLyBhbGwgT0NGIGZ1bmN0aW9ucyBoYXZlIHJ1biBieSBub3dcbiAgICBsZXQgc2VuZCA9IHtcbiAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24ocGF5bG9hZCwgbmV4dCkge1xuXG4gICAgICAgICAgICAvLyBhcHBlbmQgY29uZmlnLnNlbmQgdG8gdGhlIHRleHQgc3VwcGxpZWQgaW4gdGhlIGV2ZW50XG4gICAgICAgICAgICBwYXlsb2FkLmRhdGEudGV4dCArPSBjb25maWcuc2VuZDtcblxuICAgICAgICAgICAgLy8gY29udGludWUgYWxvbmcgbWlkZGxld2FyZVxuICAgICAgICAgICAgbmV4dChudWxsLCBwYXlsb2FkKTtcblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGRlZmluZSBtaWRkbGV3YXJlIHRvIHJ1biBhZnRlciBhIG1lc3NhZ2UgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIE9DRiBoYXMgcHJvY2Vzc2VkIGl0XG4gICAgbGV0IGJyb2FkY2FzdCA9IHtcbiAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24ocGF5bG9hZCwgbmV4dCkge1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGFwcGVuZCBjb25maWcuYnJvYWRjYXN0IHRleHQgdG8gdGhlIHBheWxvYWRcbiAgICAgICAgICAgIHBheWxvYWQuZGF0YS50ZXh0ICs9IGNvbmZpZy5icm9hZGNhc3Q7XG5cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIGFsb25nIG1pZGRsZXdhcmVcbiAgICAgICAgICAgIG5leHQobnVsbCwgcGF5bG9hZCk7XG5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBtaWRkbGV3YXJlIHRlbGxzIHRoZSBmcmFtZXdvcmsgdG8gdXNlIHRoZXNlIGZ1bmN0aW9ucyB3aGVuIFxuICAgIC8vIG1lc3NhZ2VzIGFyZSBzZW50IG9yIHJlY2VpdmVkXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWlkZGxld2FyZToge1xuICAgICAgICAgICAgc2VuZDogc2VuZCwgXG4gICAgICAgICAgICBicm9hZGNhc3Q6IGJyb2FkY2FzdFxuICAgICAgICB9XG4gICAgfVxufVxuIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbmFtZXNwYWNlID0gcmVxdWlyZSgnLi9wYWNrYWdlLmpzb24nKVsnb3Blbi1jaGF0LWZyYW1ld29yayddWyduYW1lc3BhY2UnXTtcbiAgICB3aW5kb3cuT3BlbkNoYXRGcmFtZXdvcmsucGx1Z2luW25hbWVzcGFjZV0gPSByZXF1aXJlKCcuL3NyYy9wbHVnaW4uanMnKTtcblxufSkoKTtcbiJdfQ==
