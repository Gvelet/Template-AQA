import { Page } from "@playwright/test";
import { Button } from "@/page-factory/button";
import { Input } from "@/page-factory/input";
import { Title } from "@/page-factory/title";
import { Text } from "@/page-factory/text";
import {
    SELECTOR_ENTER_BTN,
    SELECTOR_EMAIL_INPUT,
    SELECTOR_PASSWORD_INPUT,
    SELECTOR_CLOSE_MODAL_BTN,
    SELECTOR_EMAIL_CLEAR_BTN,
    SELECTOR_ERR_MESSAGE_EMAIL,
    SELECTOR_ERR_MESSAGE_PASSWORD,
    SELECTOR_FORGET_PASS_BTN,
    SELECTOR_TITLE,
    SELECTOR_PAGE_IMAGE,
    SELECTOR_PASS_CLEAR_BTN,
    SELECTOR_REGISTRATION_BTN,
    SELECTOR_SHOW_HIDDEN_PASS_BTN,
    SELECTOR_ERR_NOTIFY
} from '@/components/authorization/auth-general.const';

export class Auth {
    readonly root: string;
    readonly title: Title;
    readonly emailInput: Input;
    readonly passwordInput: Input;
    readonly enterBtn: Button;
    readonly emailCleanBtn: Button;
    readonly passCleanBtn: Button;
    readonly registrationBtn: Button;
    readonly forgetPassBtn: Button;
    readonly emailClearBtn: Button;
    readonly passwordClearBtn: Button;
    readonly showHiddenPassBtn: Button;
    readonly messageErrEmail: Text;
    readonly messageErrPassword: Text;

    constructor(page: Page, root?:string){
        this.root = root || 'form.login-form';
        this.emailInput = new Input({page, locator: SELECTOR_EMAIL_INPUT, name: 'Поле ввода email', root: this.root });
        this.passwordInput = new Input({page, locator: SELECTOR_PASSWORD_INPUT, name: 'Поле ввода password', root: this.root });
        this.enterBtn = new Button({page, locator: SELECTOR_ENTER_BTN, name: 'Кнопка "Войти"', root: this.root });
        this.title = new Title({page, locator: SELECTOR_TITLE, name: 'Заголовок', root: this.root });
        this.registrationBtn = new Button({page, locator: SELECTOR_REGISTRATION_BTN, name: 'Кнопка "Зарегестрироваться"', root: this.root });
        this.forgetPassBtn = new Button({page, locator: SELECTOR_FORGET_PASS_BTN, name: 'Кнопка "Забыл пароль"', root: this.root });
        this.emailClearBtn = new Button({page, locator: SELECTOR_EMAIL_CLEAR_BTN, name: 'Кнопка очистки поля email', root: this.root });
        this.passwordClearBtn = new Button({page, locator: SELECTOR_PASS_CLEAR_BTN, name: 'Кнопка очистки поля password', root: this.root });
        this.showHiddenPassBtn = new Button({page, locator: SELECTOR_SHOW_HIDDEN_PASS_BTN, name: 'Кнопка Показать/Скрыть пароль', root: this.root });
        this.messageErrEmail = new Text({page, locator: SELECTOR_ERR_MESSAGE_EMAIL, name: 'Валидационная ошибка email', root: this.root });
        this.messageErrPassword = new Text({page, locator: SELECTOR_ERR_MESSAGE_PASSWORD, name: 'Валидационная ошибка password', root: this.root });
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