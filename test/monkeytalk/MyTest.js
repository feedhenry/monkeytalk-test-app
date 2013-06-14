load("libs/MonkeyTalkAPI.js");

var Test = {};

/*** script -- script01 ***/
Test.MyTest = function(app) {
  MT.Script.call(this, app, "MyTest.js");
};

Test.MyTest.prototype = new MT.Script();

Test.MyTest.prototype.call = function() {
  //run: MyTest.mt
  MT.Script.prototype.call(this);
};

MT.Application.prototype.myTest = function() {
  return new Test.MyTest(this);
};

Test.MyTest.prototype.run = function() {
  var app = this.app;

  app.device().screenshot();

  // verify app text
};