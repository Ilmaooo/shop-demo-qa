import { $ } from '@wdio/globals';
import Page from './page.js';

class MyAccountPage extends Page {
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

    open() {
        return super.open('my-account');
    }
}

export default new MyAccountPage();
