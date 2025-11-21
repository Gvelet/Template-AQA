import { Page } from '@playwright/test';
import { BasePage } from '@/pages/base-page';
import { Image } from '@/page-factory/image';
import { Auth } from '@/components/authorization/auth';

import {SELECTOR_PAGE_IMAGE} from '@/components/authorization/auth-general.const'

export class AuthorizationPage extends BasePage {
    readonly name: string = 'Страница авторизации'; 
    readonly componentAuth: Auth;
    readonly url: string = '/auth/login';
    readonly imagePageUser: Image;

    constructor(public page: Page){
        super(page);
        this.componentAuth = new Auth(page);
        this.imagePageUser = new Image({page, locator: SELECTOR_PAGE_IMAGE, name: 'Картинка над заголовком страницы', root: this.root });
    }

    async authOpened(): Promise<void> {
        await this.visit();

        await this.componentAuth.title.shouldBeVisible();
        await this.componentAuth.emailInput.shouldBeVisible();
        await this.componentAuth.passwordInput.shouldBeVisible();
    };

    async authorization(keywordEmail: string, keywordPass: string): Promise<void>{
        await this.authOpened();
        await this.componentAuth.fillFieldAuthEnter(keywordEmail, keywordPass)
    };

    async fillField(keywordEmail: string, keywordPass: string): Promise<void>{
        await this.authOpened();
        await this.componentAuth.fillFieldAuth(keywordEmail, keywordPass)
    }

}