This repository is a part of the [ChatEngine Framework](https://github.com/pubnub/chat-engine).
For more information on building chat applications with PubNub, see our
[Chat Resource Center](https://www.pubnub.com/developers/chat-resource-center/).

# ChatEngine Plugin Assets

This repository serves as the docs for PubNub ChatEngine Plugins.

## Building your first plugin

### Plugin.js

The plugin entry file must be a file called ```plugin.js``` in the root directory.
From this file, you can require any other file as normal but the entry must be
```plugin.js```

### Plugin Anatomy

Every plugin must return an object containing the property ```middleware```
or ```extends```.

#### Middleware

Middleware allows you to transform payloads as they travel through the system.
They are executed in the order they are assigned.

The only valid properties of the ```middleware``` object are ```send``` and
```broadcast```.

* ```send``` is executed before the payload is sent over the
network to the rest of the connected clients.
* ```broadcast``` is executed when the client receives a payload from another
client.

```js
module.exports = (config) => {

    return {
        middleware: {
            send:
                message: (payload, next) => {
                    payload.sentTime = new Date();
                    next(err, payload);
                }
            },
            broadcast:
                message: (payload, next) -> {
                    payload.receiveTime = new Date();
                    next(err, payload);
                }
            }
        }
    };

}
```

The sub-properties under ```send``` and ```broadcast``` are the events
that will trigger the transformation.

For example, the plugin above will be executed when a ```message```
event is sent from the client.

```js
someChat.send('message', {text: 'This triggers the ```send``` method before it\'s published over the wire.'});
```

```js
someChat.on('message', (payload) => {

    // payload has been modified by the ```broadcast``` method before this was called
    console.log(payload.receiveTime);

});
```

#### Extends

You can also extend ChatEngine objects and add new methods to them. For example,
this plugin adds a method called ```newMethod()``` to the ```ChatEngine.Chat``` object.

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

When the plugin is installed, every instance of ```ChatEngine.Chat``` will have a new
method called ```newMethod()```. You can call the method like ```someChat.newMethod()```.

### Using Plugins

#### Node

It's super easy to use plugins in NodeJs. Just include the file like any other
dependency and attach it to your ChatEngine objects.

```js
// include the plugin from the remote file
const myPlugin = require('plugin.js');

// create a new chatroom
let someChatroom = new ChatEngine.Chat('new-channel');

// attach the plugin to the new chatroom
someChatroom.plugin(myPlugin(config));
```

#### Web

You'll need the ```chat-engine-plugin``` tool described in the next section to
build the package for the web.

Once you build the pckage you would include the plugin with a ```<script>``` tag like:

```html
<script src="/web/plugin.js"></script>
```

And the plugin will be available under ```ChatEngineCore.plugin[namespace]```.
The namespace is defined in package.json and you can learn more about it in the
next section.

Once the plugin is available, you can attach it to ChatEngine objects as we do in the
Node version.

```js
let someChatroom = new ChatEngine.Chat('new-channel');
someChatroom.plugin(ChatEngineCore.plugin.myPlugin(config));
```

## ChatEngine Plugin Tool

This is a build tool for ChatEngine plugins. Because ChatEngine works
on the front and back end, the plugin system requires a standardized method
for building for the web.

This build process assures us that the plugin can be used identically on
both web and nodeJS. It uses browserify to compile assets.

It's main features are:

- Namespacing plugins to avoid collisions
- Preventing global scope leak in browser
- Consistent API for integration on web and node
- Singular tests for web and node

## Setup

Install the tool globally.

```sh
npm install chat-engine-plugin -g
```

When used in a browser, this will provide your plugin as a property of the
global ```ChatEngineCore.plugin``` property.

```ChatEngineCore.plugin.emoji```.

This helps to avoid collisions with
global variables. Be careful to avoid collisions with other ChatEngine plugins!

## Run chat-engine-plugin

Then, just run ```chat-engine-plugin``` from the command line. This will bundle your
```plugin.js``` file and it's dependencies so it can be used on the web.

## Tests

Tests are defined in ```test.js``` and should use the ```mocha``` test package
with ```chai``` for consistency.

## Support

- If you **need help**, have a **general question**, have a **feature request** or to file a **bug**, contact <support@pubnub.com>.

