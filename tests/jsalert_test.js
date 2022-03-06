Feature('Alert @hello'); 

// Scenario('AlertPage', ({ I, homePage, alertPage }) => {
//     homePage.naviagteHomePage();
//     homePage.alertPageNavigation();
//     alertPage.alertAccept();
//     alertPage.verifyResult('You successfully clicked an alert')
// });

// Scenario('JsAlertPage', ({ I, homePage, alertPage }) => {
//     homePage.naviagteHomePage();
//     homePage.alertPageNavigation();
//     alertPage.alertJsConfirm();
//     alertPage.verifyResult('You clicked: Ok')
// });

Scenario('PromptAlertPage', ({ I, homePage, alertPage }) => {
    homePage.naviagteHomePage();
    homePage.alertPageNavigation();
    alertPage.alertPrompt();
    alertPage.verifyResult('You entered: ')
}).tag('@slow')