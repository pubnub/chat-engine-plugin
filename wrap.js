(function() {

    const namespace = require('./package.json')['open-chat-framework']['namespace'];

    let plugin = require('./src/plugin.js');

    if(typeof module !== "undefined") {
        module.exports = plugin;
    } else {
        window.OpenChatFramework.plugin[namespace] = plugin;
    }

})();
