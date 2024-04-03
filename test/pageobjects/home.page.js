import Page from './page.js';

class HomePage extends Page{

    get shopButton(){
        return $('#slide-6-layer-9');
    }

    clickShopButton() {
        this.shopButton.click();
    }

    open() {
        return super.open('');
    }

}

export default new HomePage();