import { Page } from "@playwright/test";
import { Button } from "@/page-factory/button";
import { Auth } from "@/components/authorization/auth";
import { NavbarDesktopUnAuth } from "@/components/navigation/header/navbarDesktopUnAuth";

import {SELECTOR_CLOSE_MODAL_BTN} from '@/components/authorization/auth-general.const';

export class ModalAuth {
    readonly name: string = 'Модалка авторизации'; 
    readonly root: string;
    readonly modalCloseBtn: Button;
    readonly componentAuth: Auth;
    readonly navDescUnAuth: NavbarDesktopUnAuth;
    readonly url: string = '/?login=true';


    constructor(public page: Page, root?:string){
        this.navDescUnAuth = new NavbarDesktopUnAuth(page);
        this.componentAuth = new Auth(page);

        this.root = root || '.base-modal__window';
        this.modalCloseBtn = new Button({page, locator: SELECTOR_CLOSE_MODAL_BTN, name: 'Кнопка закрытия модалки(Х)', root: this.root });
    };

    async authOpened(): Promise<void> {
        await this.navDescUnAuth.openModalAuth();

        await this.componentAuth.title.shouldBeVisible();
        await this.componentAuth.emailInput.shouldBeVisible();
        await this.componentAuth.passwordInput.shouldBeVisible();
    };

    async authorization(keywordEmail: string, keywordPass: string): Promise<void>{
        await this.authOpened();
        await this.componentAuth.fillFieldAuthEnter(keywordEmail, keywordPass)
    }

    async fillField(keywordEmail: string, keywordPass: string): Promise<void>{
        await this.authOpened();
        await this.componentAuth.fillFieldAuth(keywordEmail, keywordPass)
    }
}

