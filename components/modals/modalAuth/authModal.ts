import { Page } from "@playwright/test";
import { Button } from "@/page-factory/button";
import { Auth } from "@/components/authorization/auth";

import {SELECTOR_CLOSE_MODAL_BTN} from '@/components/authorization/auth-general.const';

export class ModalAuth {
    readonly root: string;
    readonly modalCloseBtn: Button;
    readonly componentAuth: Auth;
    readonly url: string = '/?login=true';


    constructor(public page: Page, root?:string){
        this.root = root || '.base-modal__window';
        this.modalCloseBtn = new Button({page, locator: SELECTOR_CLOSE_MODAL_BTN, name: 'Кнопка закрытия модалки(Х)', root: this.root });
    };

    async modalIsOpened(): Promise<void> {
        await this.componentAuth.title.shouldBeVisible();
        await this.componentAuth.emailInput.shouldBeVisible();
        await this.componentAuth.passwordInput.shouldBeVisible();
        await this.componentAuth.enterBtn.shouldBeVisible();
    };
}

