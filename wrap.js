(function() {

    const package = require('../package.json');
    window.OpenChatFramework.plugin[package.name] = require('../plugin.js');

})();
