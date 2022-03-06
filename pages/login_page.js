const { I } = inject();



module.exports = {

  // setting locators
  fields: {
    email: '#username',
    password: '#password'
  },
  submitButton: {xpath: "//button[@type='submit']"},
  banner: '#flash',

  // introducing methods
  login(username, password){
    I.fillField(this.fields.email,username)
    I.fillField(this.fields.password,password)
    I.click(this.submitButton)
  },


  verifyBannerMessage(message){
    I.waitForText(message,2, this.banner)
  },

  
  verifyErrorMessage(message){
    I.waitForText(message,2, this.banner)
  },

  verifyduplicateMessage(message){
    I.waitForText(message,2, this.banner)
  },

}
