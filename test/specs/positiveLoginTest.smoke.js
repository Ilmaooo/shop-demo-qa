import { expect } from '@wdio/globals';
import MyAccountPage from '../pageobjects/myaccount.page.js';

//positive test
describe('My Login', () => {
    it('should display success message on successful login', async () => {
        await MyAccountPage.open();
        await MyAccountPage.login(process.env.USERNAME, process.env.PASSWORD);
        //check if the success message is displayed
        const successMessage = await MyAccountPage.getAlertMessageText();
        expect(successMessage).toHaveText('Congratulations! You are now logged in.');
    });
});