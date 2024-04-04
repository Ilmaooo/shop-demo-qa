import Page from './page.js';

class HomePage extends Page{

    //define the elements

    get shopButton(){
        return $('#slide-6-layer-9');
    }

    get firstProduct(){
        return $('.noo-sh-product-html .noo-product-item:first-child');
    }

    get firstProductTitle(){
        return $('.noo-sh-product-html .noo-product-item:first-child h3 a');
    }

    //define the methods

    async clickShopButton() {
        await this.shopButton.click();
    }

    scrollFirstProductIntoView() {
        this.firstProduct.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    }

    async clickFirstProduct() {
        await this.firstProductTitle.click();
    }
    

    open() {
        return super.open('');
    }

}

export default new HomePage();