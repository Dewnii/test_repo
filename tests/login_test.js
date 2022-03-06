Feature('Login');

Scenario('Login page invalid credentials', ({ I, loginPage, homePage }) => {
    homePage.naviagteHomePage();
    homePage.loginPageNavigate();
    I.wait(2)
    loginPage.login("Test","Hello");
    loginPage.verifyBannerMessage('Your username is invalid!');
});

Scenario('Login page valid credentials', ({ I, loginPage, homePage }) => {
    homePage.naviagteHomePage();
    homePage.loginPageNavigate();
    I.wait(2)
    loginPage.login("tomsmith","SuperSecretPassword!");
    loginPage.verifyBannerMessage('You logged into a secure area');
});