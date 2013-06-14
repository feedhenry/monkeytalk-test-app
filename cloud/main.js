
exports.getConfig = function(params, callback) {
  console.log("In getConfig() call");
  return callback(null, {config: 'hardcoded_config'});
};


