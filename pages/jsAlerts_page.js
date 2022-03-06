const { I } = inject();

module.exports = {
    btnAlert : 'Click for JS Alert',
    btnJsConfirm : 'Click for JS Confirm',
    btnJsPrompt : 'Click for JS Prompt',  
    lblResults: '#result',

    alertAccept(){
        I.amAcceptingPopups();
        I.click(this.btnAlert);
        I.acceptPopup();
    },

    alertJsConfirm(){
        I.amAcceptingPopups();
        I.click(this.btnJsConfirm);
        I.acceptPopup();
    },

    alertPrompt(){
        I.amAcceptingPopups();
        I.click(this.btnJsPrompt);
        I.acceptPopup();
    },

    verifyResult(result){
        I.waitForText(result,2, this.lblResults)
    }


}
