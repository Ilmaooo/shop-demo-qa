import Page from './page.js';

class ProductPage extends Page{

    //color dropdown menu
    get colorDropdown(){
        return $('#pa_color');
    }

    get sizeDropdown(){
        return $('#pa_size');
    }

    //select color
    async selectColor(color) {
        await this.colorDropdown.selectByVisibleText(color);
    }

    //size dropdown menu
    async selectSize(size){
        await (await this.sizeDropdown).selectByVisibleText(size);
    }

    //add to cart button
    get addToCartButton(){
        return $('button.single_add_to_cart_button');
    }

    //get alert message
    get alertMessage(){
        return $('.wc-block-components-notice-banner');
    }

    async getAlertMessageText() {
        await this.alertMessage.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'Alert message element is not displayed within 5 seconds'
        });
    
        return this.alertMessage.getText();      
    }

    // add product to the cart

    async addToCart(color, size){
        await this.colorDropdown.click();
        await this.selectColor(color);
        await this.sizeDropdown.click();
        await this.selectSize(size);
        await this.addToCartButton.click();
    }
}

export default new ProductPage();