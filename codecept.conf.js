exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: ' https://the-internet.herokuapp.com',
      show: true,
      browser: 'chromium' 
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login_page.js',
    homePage: './pages/home_page.js',
    dropdownPage: './pages/dropdown_page.js',
    addRemovePage: './pages/addRemove_page.js',
    alertPage: './pages/jsAlerts_page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept-test'
}