const TEST_URL = 'https://www.ecosia.org/search?q=2%2B2&mocked=tripadvisorEntity';

module.exports = {
  afterEach: function (browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()');
  },

  'Trip Advisor': function (browser) {
    browser
      .url(TEST_URL)
      .waitForElementVisible('[data-test-id="mainline"]')
      .assert.elementPresent('[data-test-id="mainline"]')
      .percySnapshot("Trip Advisor", { 
          widths: [375, 768, 992, 1200, 1280],
    })
  }
};