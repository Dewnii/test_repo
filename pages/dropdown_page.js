const { I } = inject();

module.exports = {

    dropdown: '#dropdown',

    selectOption(option){
        I.selectOption(this.dropdown, option)
    },

    verifySelectedOption(value){
        I.see(value);
    }

}