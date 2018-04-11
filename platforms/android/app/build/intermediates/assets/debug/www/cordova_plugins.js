cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "com.filfatstudios.spinnerdialog.SpinnerDialog",
    "file": "plugins/com.filfatstudios.spinnerdialog/www/SpinnerDialog.js",
    "pluginId": "com.filfatstudios.spinnerdialog",
    "clobbers": [
      "SpinnerDialog"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-whitelist": "1.3.3",
  "com.filfatstudios.spinnerdialog": "1.0.2"
};
// BOTTOM OF METADATA
});