const { I } = inject();

module.exports = {

    btnAddElement : 'Add Element',
    btnRemoveElement: 'Delete',

    addElement(){
        I.click(this.btnAddElement);
    },

    removeElement(){
        I.click(this.btnRemoveElement)
    }
}
