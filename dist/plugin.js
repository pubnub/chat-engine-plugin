(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "name": "ocf-plugin",
  "version": "0.0.1",
  "main": "dist/plugin.js",
  "open-chat-framework": {
    "namespace": "plugin"
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
        namespace,
        middleware: {
            send: send, 
            broadcast: broadcast
        }
    }
}

},{}],3:[function(require,module,exports){
(function() {

    const namespace = require('./package.json')['open-chat-framework']['namespace'];

    let plugin = require('./src/plugin.js');

    if(typeof module !== "undefined") {
        module.exports = plugin;
    } else {
        window.OpenChatFramework.plugin[namespace] = plugin;
    }

})();

},{"./package.json":1,"./src/plugin.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlLmpzb24iLCJzcmMvcGx1Z2luLmpzIiwid3JhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwib2NmLXBsdWdpblwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcIm1haW5cIjogXCJkaXN0L3BsdWdpbi5qc1wiLFxuICBcIm9wZW4tY2hhdC1mcmFtZXdvcmtcIjoge1xuICAgIFwibmFtZXNwYWNlXCI6IFwicGx1Z2luXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl4xNC4zLjBcIixcbiAgICBcImNoYWxrXCI6IFwiXjEuMS4zXCIsXG4gICAgXCJjb21tYW5kZXJcIjogXCJeMi45LjBcIixcbiAgICBcImd1bHBcIjogXCJeMy45LjFcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCJeMS4xLjBcIlxuICB9LFxuICBcImJpblwiOiB7XG4gICAgXCJvY2YtcGx1Z2luXCI6IFwiLi9ndWxwZmlsZS5qc1wiXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKGNvbmZpZykgPT4ge1xuXG4gICAgLy8gY3JlYXRlIGVtcHR5IGNvbmZpZyBvYmplY3QgaWYgbm90IHN1cHBsaWVkXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gICAgLy8gZGVmaW5lIGRlZmF1bHRzIGlmIGNvbmZpZyBpcyBlbXB0eVxuICAgIGNvbmZpZy5zZW5kID0gY29uZmlnLnNlbmQgfHwgXCIgcHViX2FwcGVuZFwiO1xuICAgIGNvbmZpZy5zdWJzY3JpYmUgPSBjb25maWcuc3Vic2NyaWJlIHx8IFwiIHN1Yl9hcHBlbmRcIjtcblxuICAgIC8vIGRlZmluZSBtaWRkbGV3YXJlIHRvIHJ1biByaWdodCBiZWZvcmUgYSBtZXNzYWdlIGxlYXZlcyB0aGUgY2xpZW50XG4gICAgLy8gYWxsIE9DRiBmdW5jdGlvbnMgaGF2ZSBydW4gYnkgbm93XG4gICAgbGV0IHNlbmQgPSB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKHBheWxvYWQsIG5leHQpIHtcblxuICAgICAgICAgICAgLy8gYXBwZW5kIGNvbmZpZy5zZW5kIHRvIHRoZSB0ZXh0IHN1cHBsaWVkIGluIHRoZSBldmVudFxuICAgICAgICAgICAgcGF5bG9hZC5kYXRhLnRleHQgKz0gY29uZmlnLnNlbmQ7XG5cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIGFsb25nIG1pZGRsZXdhcmVcbiAgICAgICAgICAgIG5leHQobnVsbCwgcGF5bG9hZCk7XG5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBkZWZpbmUgbWlkZGxld2FyZSB0byBydW4gYWZ0ZXIgYSBtZXNzYWdlIGhhcyBiZWVuIHJlY2VpdmVkIGFuZCBPQ0YgaGFzIHByb2Nlc3NlZCBpdFxuICAgIGxldCBicm9hZGNhc3QgPSB7XG4gICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKHBheWxvYWQsIG5leHQpIHtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBhcHBlbmQgY29uZmlnLmJyb2FkY2FzdCB0ZXh0IHRvIHRoZSBwYXlsb2FkXG4gICAgICAgICAgICBwYXlsb2FkLmRhdGEudGV4dCArPSBjb25maWcuYnJvYWRjYXN0O1xuXG4gICAgICAgICAgICAvLyBjb250aW51ZSBhbG9uZyBtaWRkbGV3YXJlXG4gICAgICAgICAgICBuZXh0KG51bGwsIHBheWxvYWQpO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gbWlkZGxld2FyZSB0ZWxscyB0aGUgZnJhbWV3b3JrIHRvIHVzZSB0aGVzZSBmdW5jdGlvbnMgd2hlbiBcbiAgICAvLyBtZXNzYWdlcyBhcmUgc2VudCBvciByZWNlaXZlZFxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgbWlkZGxld2FyZToge1xuICAgICAgICAgICAgc2VuZDogc2VuZCwgXG4gICAgICAgICAgICBicm9hZGNhc3Q6IGJyb2FkY2FzdFxuICAgICAgICB9XG4gICAgfVxufVxuIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbmFtZXNwYWNlID0gcmVxdWlyZSgnLi9wYWNrYWdlLmpzb24nKVsnb3Blbi1jaGF0LWZyYW1ld29yayddWyduYW1lc3BhY2UnXTtcblxuICAgIGxldCBwbHVnaW4gPSByZXF1aXJlKCcuL3NyYy9wbHVnaW4uanMnKTtcblxuICAgIGlmKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBwbHVnaW47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Lk9wZW5DaGF0RnJhbWV3b3JrLnBsdWdpbltuYW1lc3BhY2VdID0gcGx1Z2luO1xuICAgIH1cblxufSkoKTtcbiJdfQ==
