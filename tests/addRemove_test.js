Feature('Add Remove Element'); 

Scenario('Add Element', ({ I, homePage, addRemovePage }) => {
    homePage.naviagteHomePage();
    homePage.addRemovePagenavigate();
    addRemovePage.addElement();
    addRemovePage.removeElement();
    I.wait(2)
});