load("libs/MonkeyTalkAPI.js");
load("libs/json2.js");

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
  app.label('title').verify();
  app.label('title').verify('Test App');

  // verify app info and build up info object
  var info = {
    ts: Date.now()
  };
  app.debug().print("MyTest - save info");
  app.input('init').verify('ok');
  info.destination = app.input('destination').get('value');
  info.app_version = app.input('app_version').get('value');
  info.appid = app.input('appid').get('value');
  info.appkey = app.input('appkey').get('value');
  info.host = app.input('host').get('value');
  info.mode = app.input('mode').get('value');
  info.cuid = app.input('cuid').get('value');
  info.agent = app.input('agent').get('value');

  app.debug().print("MyTest - make act call");
  var req = '' + info.ts;
  app.input('actreq').clear();
  app.input('actreq').enterText(req);
  app.button('makeactcall').tap();
  app.input('act').verify('ok');
  app.input('actres').verify(req);

  // Output Info
  app.debug().print('DEVICE_INFO==>' + JSON.stringify(info));
  /*
  {
    "host": "https://testing-df.stg2.feedhenry.com",
    "appid": "EYmXcOzbB7Knsmz9XCdiougM",
    "destination": "android",
    "cuid": "a4c7b48fb9afaf2a",
    "appkey": "195c9eec62a5c70c7a2689b5e750e48b9828a48f",
    "ts": 1371478973382,
    "app_version": "14",
    "mode": "dev",
    "agent": "Mozilla/5.0 (Linux; U; Android 4.1.1; en-us; Android SDK built for x86 Build/JRO03H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
  }
  */

  app.debug().print("MyTest - end");
};