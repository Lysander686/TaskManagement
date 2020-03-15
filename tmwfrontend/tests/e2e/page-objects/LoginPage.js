module.exports = {
  url : function () {
    return this.api.launch_url + '/login'

  },
  elements:{
    app: '#app',
    logoImage: 'img.logo',
    usernameInput: '#username',
    passwordInput: '#password',
    submitButton: 'button[type=submit]',
    formError: '.failed'
  }

}
