const { I } = inject();

module.exports = {

 headerText: 'Welcome to the-internet',
 loginBtn: 'Form Authentication',
 dropDown: 'Dropdown',
 addRemove: 'Add/Remove Elements',
 alert: 'JavaScript Alerts',

naviagteHomePage(){

    I.amOnPage('/');
    I.see(this.headerText);
},

loginPageNavigate(){

    I.click(this.loginBtn);
},

dropdownPageNavigate(){
    I.click(this.dropDown);
},

addRemovePagenavigate(){
    I.click(this.addRemove);
},

alertPageNavigation(){
    I.click(this.alert)
}
}