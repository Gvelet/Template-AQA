import { Page } from '@playwright/test';
import { BasePage } from '@/pages/base-page';
import { Image } from '@/page-factory/image';
import { Auth } from '@/components/authorization/auth';

import {SELECTOR_PAGE_IMAGE} from '@/components/authorization/auth-general.const'

export class AuthorizationPage extends BasePage {
    readonly authComponent: Auth;
    readonly url: string = '/auth/login';
    readonly imagePageUser: Image;

    constructor(public page: Page){
        super(page);
        this.authComponent = new Auth(page);
        this.imagePageUser = new Image({page, locator: SELECTOR_PAGE_IMAGE, name: 'Картинка над заголовком страницы', root: this.root });
    }

    async authPage(keywordEmail: string, keywordPass: string){
        await this.visit()
        await this.authComponent.fillFieldAuthEnter(keywordEmail, keywordPass)
    }

}