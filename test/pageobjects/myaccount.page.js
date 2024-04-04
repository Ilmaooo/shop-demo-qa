import Page from './page.js';

class MyAccountPage extends Page {

    // login form elements
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"][name="login"]');
    }

    get notificationtMessage() {
        return $('.wc-block-components-notice-banner.is-error .wc-block-components-notice-banner__content');
    }

    //register form elements
    get inputRegUserName(){
        return $('#reg_username');
    }

    get inputEmail() {
        return $('#reg_email');
    }

    get inputRegPassword(){
        return $('#reg_password');
    }

    get btnRegSubmit(){
        return $('button[type="submit"][name="register"]');
    }

    async getNotificationMessageText() {
        await this.notificationtMessage.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'notification message element is not displayed within 5 seconds'
        });
    
        return this.notificationtMessage.getText();      
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async register(username, email, password){
        await this.inputRegUserName.setValue(username);
        await this.inputEmail.setValue(email);
        await this.inputRegPassword.setValue(password);
        await this.btnRegSubmit.click();
    }

    open() {
        return super.open('my-account');
    }
}

export default new MyAccountPage();
