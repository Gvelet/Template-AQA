import { Page } from '@playwright/test';
import { BasePage } from '@/pages/base-page';
import { Auth } from '@/components/authorization';
import { ModalAuth } from '@/components/modals/modalAuth/authModal';

export class AuthorizationPage extends BasePage {
    readonly authComponent: Auth;
    readonly modalAuth: ModalAuth;

    readonly url: string = '/auth/login';

    constructor(public page: Page){
        super(page);
        this.authComponent = new Auth(page)
    }

    async authPage(keywordEmail: string, keywordPass: string){
        await this.visit()
        await this.authComponent.fillFieldAuthEnter(keywordEmail, keywordPass)
    }

}