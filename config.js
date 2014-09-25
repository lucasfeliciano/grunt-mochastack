var hashkey  = 'key';
var username = 'user';

module.exports = {
  local: {
      desiredCapabilities: {browserName: 'phantomjs'}
  },
  ie: {
      desiredCapabilities: {
          'browser' : 'IE',
          'browser_version' : '7.0',
          'os' : 'Windows',
          'os_version' : 'XP',
          'resolution' : '1280x1024',
          'browserstack.local': true,
          'browserstack.debug': true
      },
      host: 'hub.browserstack.com',
      port: 80,
      user : username,
      key: hashkey,
      logLevel: 'silent'
  },
  firefox:{
      desiredCapabilities: {
          'browser' : 'Firefox',
          'browser_version' : '31.0',
          'os' : 'Windows',
          'os_version' : 'XP',
          'resolution' : '1280x1024',
          'browserstack.local': true,
          'browserstack.debug': true
      },
      host: 'hub.browserstack.com',
      port: 80,
      user : username,
      key: hashkey,
      logLevel: 'silent'
  }
};
