monkeytalk-test-app
===================

FH Hybrid App with MonkeyTalk tests.

Building a MonkeyTalk Instrumented App on the FeedHenry Platform (Android)
-------

* Create a new app in the FeedHenry Platform (Use a clone of this repo to include a sample MonkeyTalk test & test runner)
* Hybrid Client > Configuration > Android, check the 'Enabled MonkeyTalk' option, and Save.
* Hybrid Client > Build > Android > Debug > Build Now, and follow through the steps to download the android apk file.
* Copy the apk file to ./test/fixtures/android.apk

Building a MonkeyTalk Instrumented App on the FeedHenry Platform (iOS - iOS Simulator)
-------

TODO

Testing (Local Emulator - Android)
-------

List available avds

    android list avd

Choose one and launch it

    emulator -avd avd_name

Verify the emulator can be seen by adb

    adb devices -l

Install the apk & launch it manually from the emulator window

    adb install ./test/fixtures/android.apk

Run the MonkeyTalk test against the running app in the emulator

    ant local-test-android-emulator

Expected output should be something like:

    local-test-android-emulator:
    [monkeytalk:run] running suite TestSuite.mts...
    [monkeytalk:run] MonkeyTalk v1.0.47_976 - 2013-04-22 20:23:15 MDT - Copyright 2012-2013 Gorilla Logic, Inc. - www.gorillalogic.com
    [monkeytalk:run]
    [monkeytalk:run] -start suite (1 test)
    [monkeytalk:run]   1 : MyTest
    [monkeytalk:run] Device * screenshot
    [monkeytalk:run] Label main verify
    [monkeytalk:run] Label main verify "Hello World"
    [monkeytalk:run] Debug * print "Finished MyTest"
    [monkeytalk:run] Finished MyTest
    [monkeytalk:run]   -> OK
    [monkeytalk:run] -end suite
    [monkeytalk:run] result: OK
    [monkeytalk:run]
    [monkeytalk:run] ...done

    test:

    BUILD SUCCESSFUL
    Total time: 3 seconds

Testing (Local Device - Android)
------

TODO - ant local-test-android-device

Testing (Local Device - iOS)
------

TODO - ant local-test-ios-device

Testing (Cloud Devices & Emulators - Android)
------

TODO - ant cloud-test-android-device cloud-test-android-emulator

Testing (Cloud Devices & Simulators - iOS)
------

TODO - ant cloud-test-ios-device cloud-test-ios-simulator

Troubleshooting
----

### Antlib task failures

    BUILD FAILED
    /Users/me/work/monkeytalk-test-app/build.xml:62: Problem: failed to create task or type antlib:com.gorillalogic.monkeytalk.ant:run
    Cause: The name is undefined.
    Action: Check the spelling.
    Action: Check that any custom tasks/types have been declared.
    Action: Check that any <presetdef>/<macrodef> declarations have taken place.
    No types or tasks have been defined in this namespace yet

    This appears to be an antlib declaration.
    Action: Check that the implementing library exists in one of:
            -/usr/share/ant/lib
            -/Users/me/.ant/lib
            -a directory added on the command line with the -lib argument

Run the following ant task to copy the required jar files to ~/.ant/lib

    ant copy-libs

A directory listing should show the following jar files

    ls ~/.ant/lib/
    cloud-ant-1.0.31.jar    monkeytalk-ant-1.0.47.jar

### Android path issues

    BUILD FAILED
    /Users/me/work/monkeytalk-test-app/build.xml:62: AndroidEmulator - you must specify a vaild path to adb. File not found: /Users/me/work/monkeytalk-test-app/${env.ANDROID_SDK_HOME}/platform-tools/adb

Ensure the environment variable ANDROID\_SDK\_HOME is set to the root of you android sdk installation, and the PATH environment variable includes the android tools directories.

    export ANDROID_SDK_HOME=$HOME/android-sdk-macosx
    export PATH=$ANDROID_SDK_HOME/tools:$ANDROID_SDK_HOME/platform-tools

Further Reading
--------------

* MonkeyTalk Documentation - https://www.gorillalogic.com/monkeytalk-documentation

Notes
----
* Monkeytalk instrumentation of apps is only available for iOS and Android at time of writing
* Monkeytalk & iOS Simulator builds configuration option is only enabled for 'testing' domains at time of writing. Ideally this would be enabled everywhere.