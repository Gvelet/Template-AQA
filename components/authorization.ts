import { Page } from "@playwright/test";
import { Button } from "@/page-factory/button";
import { Input } from "@/page-factory/input";
import {
    SELECTOR_ENTER_BTN,
    SELECTOR_EMAIL_INPUT,
    SELECTOR_PASSWORD_INPUT
} from '@/components/authorization.const';

export class Auth {
    readonly root: string;
    readonly emailInput: Input;
    readonly passwordInput: Input;
    readonly enterBtn: Button;

    constructor(page: Page, root?:string){
        this.root = root || 'form.login-form';
        this.emailInput = new Input({page, locator: SELECTOR_EMAIL_INPUT, name: 'Поле ввода email', root: this.root });
        this.passwordInput = new Input({page, locator: SELECTOR_PASSWORD_INPUT, name: 'Поле ввода password', root: this.root });
        this.enterBtn = new Button({page, locator: SELECTOR_ENTER_BTN, name: 'Кнопка "Войти"', root: this.root });
    };

    async fillFieldAuth(keywordEmail: string, keywordPass: string) {
        await this.emailInput.fill(keywordEmail, { validateValue: true });
        await this.passwordInput.fill(keywordPass, { validateValue: true });   
    }

    async fillFieldAuthEnter(keywordEmail: string, keywordPass: string) {
        await this.fillFieldAuth(keywordEmail, keywordPass);
        await this.enterBtn.click();    
    }
};