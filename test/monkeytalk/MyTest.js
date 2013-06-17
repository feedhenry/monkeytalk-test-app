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

  app.debug().print("MyTest - start");

  // take a screenshot
  app.debug().print("MyTest - screenshot");
  app.device().screenshot();

  // verify title
  app.debug().print("MyTest - verify title");
  app.label('h1').verify();
  app.label('h1').verify('Test App');

  // verify app info and build up info object
  var info = {};
  app.debug().print("MyTest - save info");
  app.input('init').verify('ok');
  app.input('destination').get('value');
  app.input('app_version').get('value');
  app.input('appid').get('value');
  app.input('appkey').get('value');
  app.input('host').get('value');
  app.input('mode').get('value');
  app.input('cuid').get('value');
  app.input('agent').get('value');

  app.debug().print("MyTest - make act call");
  var req = '' + (new Date().getTime());
  app.input('actreq').clear();
  app.input('actreq').enterText(req);
  app.label('makeactcall').tap();
  app.input('act').verify('ok');
  app.input('actres').verify(req);

  // some log output
  app.debug().print("MyTest - end");
};