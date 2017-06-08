(function() {

    const package = require('../package.json');
    window.ChatEngineCore.plugin[package.name] = require('../src/plugin.js');

})();
