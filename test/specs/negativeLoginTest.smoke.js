import { expect } from '@wdio/globals';
import MyAccountPage from '../pageobjects/myaccount.page.js';

//negative test
describe('My Login', () => {
    it('should display error message for invalid login credentials', async () => {
        await MyAccountPage.open();
        await MyAccountPage.login('invalid_username', 'invalid_password');

        // Check if the error message is displayed
        const errorMessage = await MyAccountPage.getNotificationtMessageText();
        expect(errorMessage).toHaveText('The username or password you entered is incorrect.');
    });
});
