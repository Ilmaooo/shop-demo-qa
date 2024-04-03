import { expect } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';
import ProductPage from '../pageobjects/product.page.js';

//adding product to the cart
describe('Adding product to the cart', () => {
    it('should add product to the cart successfully from the home page', async () => {
        await HomePage.open();
        
        await HomePage.scrollFirstProductIntoView();
        await HomePage.clickFirstProduct();
        await ProductPage.addToCart('Pink', '36');
        
        //assert that product is addedd successfully
        const alertMessage = await ProductPage.getAlertMessageText();   
        expect(alertMessage).toHaveText('“pink drop shoulder oversized t shirt” has been added to your cart.');
    });
});