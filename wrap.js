(function() {

    const pkg = require('../package.json');
    window.ChatEngineCore.plugin[pkg.name] = require('../src/plugin.js');

})();
