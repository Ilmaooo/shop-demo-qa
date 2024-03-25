import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';

describe('Shop now button', () => {
    it('should redirect to the shop page', async () => {
        await HomePage.open();
        await HomePage.clickShopButton();
        console.log('Button clicked');
        expect(browser.getUrl()).toBe('https://shop.demoqa.com/shop/');
        console.log('URL correct: ', browser.getUrl());
    })
})