import { $ } from '@wdio/globals';
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

    get errorMessage() {
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
        return($('#reg_password'));
    }

    get btnRegSubmit(){
        return $('button[type="submit"][name="login"]');
    }

    async getErrorMessageText() {
        await browser.waitUntil(async () => {
            const errorMessageElement = this.errorMessage;
            return await errorMessageElement.isDisplayed();
        }, {
            timeout: 5000,
            timeoutMsg: 'Error message element is not displayed within 5 seconds'
        });

        const errorMessageElement = this.errorMessage;
        return errorMessageElement.getText();
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async register(username, email, password){
        await this.inputRegUserName.setValue(username);
        await this.inputEmail.setValue(email);
        await this.getInputPassword.setValue(password);
        await this.btnRegSubmit.click();
    }

    open() {
        return super.open('my-account');
    }
}

export default new MyAccountPage();
