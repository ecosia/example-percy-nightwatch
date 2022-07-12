const TEST_URL = 'https://www.ecosia.org/search?q=2%2B2&mocked=climateActionTracker';

module.exports = {
  afterEach: function (browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()');
  },

  'Climate Action Tracker': function (browser) {
    browser
      .url(TEST_URL)
      .assert.elementPresent('.climate-action-tracker')
      .percySnapshot("Climate Action Tracker", { 
          widths: [375, 768, 992, 1200, 1280],
    })
  }
};