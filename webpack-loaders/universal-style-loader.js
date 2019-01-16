const path = require("path");

const loaderUtils = require("loader-utils");

module.exports = function (source) {
  
}

module.exports.pitch = function (request) {
  console.log('-----request-------', request)
  const options = loaderUtils.getOptions(this) || {};
  return [
    // Style Loader
    // Adds CSS to the DOM by adding a <style> tag
    "",
    // Load styles
    "var content = require(" + loaderUtils.stringifyRequest(this, "!!" + request) + ");",
    "",
    "if(typeof content === 'string') content = [[module.id, content, '']];",
    "",
    // Add styles to the DOM
    //"var update = require(" + loaderUtils.stringifyRequest(this, "!" + path.join(__dirname, "lib", "addStyles.js")) + ")(content, options);",
    // "",
    "if(content.locals) module.exports = content.locals;",
  ].join("\n");
}