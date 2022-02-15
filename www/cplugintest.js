// Empty constructor
function CPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
CPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'CPlugin', 'show', [options]);
}

// Installation constructor that binds CPlugin to window
CPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.cPluginTest = new CPlugin();
  return window.plugins.cPluginTest;
};
cordova.addConstructor(CPlugin.install);
