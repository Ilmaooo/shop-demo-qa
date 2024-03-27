import { expect } from '@wdio/globals';
import MyAccountPage from '../pageobjects/myaccount.page.js';

//positive test
describe('My Login', () => {
    it('should display success message', async () => {
        await MyAccountPage.open();
        await MyAccountPage.login(process.env.USERNAME, process.env.PASSWORD);
        //check if the success message is displayed
        const successMessage = await $('.wc-block-components-notice-banner.is-success');
        expect(await successMessage.isDisplayed()).toBe(true);
    });
});
