load("libs/MonkeyTalkAPI.js");

var Test = {};

/*** script -- MyTest ***/
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

  // take a screenshot
  app.device().screenshot();

  // verify the main div is visible
  app.label('main').verify();

  // verify text in main div
  app.label('main').verify('Hello World');

  // some log output
  app.debug().print("Finished MyTest");
};