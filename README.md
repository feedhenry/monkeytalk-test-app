monkeytalk-test-app
===================

FH Hybrid App with MonkeyTalk tests.

Testing (Android Emulator)
-------

* Create a new app in the FH Platform from this git repo
* Ensure the Cloud code deployed successfully
* In Hybrid Client > Configuration > Android, check the 'Enabled MonkeyTalk' option, and Save.
* Hybrid Client > Build > Android > Debug > Build Now, and follow through the steps to download the android apk file.
* Copy the apk file to ./test/fixtures/android.apk

List available avds

    android list avd

Choose one and launch it

    emulator -avd avd_name

Verify the emulator can be seen by adb

    adb devices -l

Install the apk & launch it manually from the emulator window

    adb install ./test/fixtures/android.apk

Run the MonkeyTalk test against the running app in the emulator

    ant test

Expected output should be

    SOME OUTPUT

Further Reading
--------------

* MonkeyTalk Documentation - https://www.gorillalogic.com/monkeytalk-documentation

Notes
----
* Monkeytalk instrumentation of apps is only available for iOS and Android at time of writing
* Monkeytalk & iOS Simulator builds configuration option is only enabled for 'testing' domains at time of writing. Ideally this would be enabled everywhere.


