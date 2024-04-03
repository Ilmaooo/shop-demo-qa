import { expect } from '@wdio/globals';
import MyAccountPage from '../pageobjects/myaccount.page.js';

//register user test
describe('Register User', () => {

    it('should register a new user', async () => {
        await MyAccountPage.open();
        await MyAccountPage.register(process.env.REG_USERNAME, process.env.REG_EMAIL, process.env.REG_PASSWORD);

        const alertMessage = await MyAccountPage.getAlertMessageText();
        expect(alertMessage).toHaveText('Registration complete. Please check your email.');
    });
}); 