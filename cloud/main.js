
exports.testCall = function(params, callback) {
  console.log("In testCall");
  return callback(null, {ts: params.ts});
};


