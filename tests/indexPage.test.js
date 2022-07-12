// const TEST_URL = 'https://www.staging.ecosia.org/';

// module.exports = {
//   afterEach: function (browser) {
//     // Clear local storage between test cases.
//     browser.execute('window.localStorage.clear()');
//   },

//   'Index page': function (browser) {
//     browser
//       .url(TEST_URL)
//       .assert.elementPresent('[data-test-id="index-header"]')
//       .moveToElement('.footer-bcorp', 0, 0)
//       //.pause(20000)
//       .percySnapshot("Index page -> Header", { 
//           widths: [375, 768, 992, 1200, 1280],
//           percyCSS: '[data-test-id="counter"] { visibility: hidden; }', })
//   }
// };