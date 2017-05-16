# Open Chat Framework Plugin Assets

This repository serves as the docs for Open Chat Framework Plugins.

# Open Chat Framework Plugin Tool

This is a build tool for Open Chat Framework plugins. Because OCF works
on the front and back end, the plugin system requires a standardized method
for building for web.

This build process assures us that the plugin can be used identically on 
both web and nodeJS. It uses browserify to compile assets.

It's main features are:

- name spacing plugins to avoid collisions
- preventing global scope leak in browser
- consistent API for integration on web and node
- singular tests for web and node

## Setup

Install the tool globally.

```
npm install ocf-plugin -g
```

## Namespace

Define a namespace in package.json in an object called "open-chat-framework".

```json
"main": "plugin.js",
"open-chat-framework": {
    "namespace": "emoji"
},
```

When used in a browser, this will provide your plugin as a property of the
global ```OpenChatFramework.plugin``` property. 

```OpenChatFramework.plugin.emoji```.

This helps to avoid collisions with 
global variables. Be careful to avoid collisions with other OCF plugins!

## plugin.js

The plugin entry file must be a file called ```plugin.js``` in the root directory. 
From this file you can require any other file as normal, but the entry must be
plugin.js

## Run ocf-plugin

Then, just run ```ocf-plugin``` from the command line. This will bundle your
```plugin.js``` file and it's dependencies so it can be used on the web.

## Plugin Anatomy

Every plugin must export a function. The first parameter of the function are
any config variables that might be supplied to a new instance of a plugin.

```js
module.exports = (config) => {}
```

Every plugin must return an object containing the property ```middleware``` 
or ```extends```.

Middleware allows you to transform payloads as they travel through the system.
They are executed in order they are assigned.

The only valid properties of the ```middleware``` object are ```send``` and
```broadcast```. 

```send``` is executed before the payload is sent over the
network to the rest of the connected clients.

```broadcast``` is executed when the client receives a payload from another 
client.

```js
module.exports = (config) => {

    return {
        middleware: {
            broadcast: {
            },
            send: {
            }
        }
    }
}
```

The sub properties are the events that will trigger the transformation. For 
example, the plugin below will be executed when a ```message``` event is sent.

```js
// water-to-coffee.js
module.exports = (config) => {

    return {
        middleware: {
            send: {
                message: (payload, next) => {

                    payload.text.replace('water.', 'coffee!');
                    next(null, payload);

                }
            }
        }
    }
}
```

```
let myPlugin = require('plugin.js');
let someChatroom = new OCF.Chat('new-channel');
someChatroom.plugin(myPlugin(config));
```

On web, you would include the plugin with a ```<script>``` tag like:

```html
<script src="/plugin.js"></script>
```

And the plugin will be available under ```OpenChatFramework.plugin[namespace]```.
The namespace is defined in package.json.

```js
let someChatroom = new OCF.Chat('new-channel');
someChatroom.plugin(OpenChatFramework.plugin.myPlugin(config));
````

To trigger the plugin above:

```js
someChatroom.send('message', {text: 'I want water.'});
```

## Extending OCF Objects

You can also extend OCF objects and add new methods to them. For example,
this plugin adds a method called ```newMethod()``` to the ```OCF.Chat``` object.

```js
module.exports - {
    return {
        extends: {
            Chat: {
                construct: () => {
                    // this is called whenever a new Chat is created
                    // the Chat object is available through this.parent
                    console.log('I am extending', this.parent);
                }
                newMethod: (params) => {
                    // this is a new method that gets attached to Chat
                }
            }
        }
    }

}
```
