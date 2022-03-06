Feature('DropDown Select'); 

Scenario('Select First Option', ({ I, homePage, dropdownPage }) => {
    homePage.naviagteHomePage();
    homePage.dropdownPageNavigate();
    I.wait(2)
    dropdownPage.selectOption('Option 1')
    dropdownPage.verifySelectedOption('Option 1')
    I.wait(2)
});