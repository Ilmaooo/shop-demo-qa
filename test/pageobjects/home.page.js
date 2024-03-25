import { $ } from '@wdio/globals';
import Page from './page.js';

class HomePage extends Page{

    get ShopButton(){
        return $('#slide-6-layer-9');
    }

    clickShopButton() {
        this.ShopButton.click();
    }

    open() {
        return super.open('');
    }

}

export default new HomePage();