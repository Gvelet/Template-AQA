import { Page } from "@playwright/test";
import { Title } from "@/page-factory/title";
import { Button } from "@/page-factory/button";
import { Input } from "@/page-factory/input";
import { Text } from "@/page-factory/text";

import {
    SELECTOR_CLOSE_MODAL_BTN,
    SELECTOR_EMAIL_INPUT,
    SELECTOR_ENTER_BTN,
    SELECTOR_FORGET_PASS_BTN,
    SELECTOR_MODAL_TITLE,
    SELECTOR_PASSWORD_INPUT,
    SELECTOR_REGISTRATION_BTN,
    SELECTOR_SHOW_HIDDEN_PASS_BTN,
    SELECTOR_EMAIL_CLEAR_BTN,
    SELECTOR_ERR_MESSAGE_EMAIL,
    SELECTOR_ERR_MESSAGE_PASSWORD,
    SELECTOR_PASS_CLEAR_BTN
} from '@/components/modals/modalAuth/authModal.const';

export class ModalAuth {
    readonly root: string;
    readonly titleModal: Title;
    readonly emailInput: Input;
    readonly passwordInput: Input;
    readonly enterBtn: Button;
    readonly registrationModalBtn: Button;
    readonly forgetPassmodalBtn: Button;
    readonly modalCloseBtn: Button;
    readonly emailClearBtn: Button;
    readonly passwordClearBtn: Button;
    readonly showHiddenPassBtn: Button;
    readonly messageErrEmail: Text;
    readonly messageErrPassword: Text;

    constructor(public page: Page, root?:string){
        this.root = root || '.base-modal__window';
        this.titleModal = new Title({page, locator: SELECTOR_MODAL_TITLE, name: 'Заголовок модального окна', root: this.root });
        this.emailInput = new Input({page, locator: SELECTOR_EMAIL_INPUT, name: 'Поле ввода email', root: this.root });
        this.passwordInput = new Input({page, locator: SELECTOR_PASSWORD_INPUT, name: 'Поле ввода password', root: this.root });
        this.enterBtn = new Button({page, locator: SELECTOR_ENTER_BTN, name: 'Кнопка "Войти"', root: this.root });
        this.registrationModalBtn = new Button({page, locator: SELECTOR_REGISTRATION_BTN, name: 'Кнопка "Зарегестрироваться"', root: this.root });
        this.forgetPassmodalBtn = new Button({page, locator: SELECTOR_FORGET_PASS_BTN, name: 'Кнопка "Забыл пароль"', root: this.root });
        this.modalCloseBtn = new Button({page, locator: SELECTOR_CLOSE_MODAL_BTN, name: 'Кнопка закрытия модалки(Х)', root: this.root });
        this.emailClearBtn = new Button({page, locator: SELECTOR_EMAIL_CLEAR_BTN, name: 'Кнопка очистки поля email', root: this.root });
        this.passwordClearBtn = new Button({page, locator: SELECTOR_PASS_CLEAR_BTN, name: 'Кнопка очистки поля password', root: this.root });
        this.showHiddenPassBtn = new Button({page, locator: SELECTOR_SHOW_HIDDEN_PASS_BTN, name: 'Кнопка Показать/Скрыть пароль', root: this.root });
        this.messageErrEmail = new Text({page, locator: SELECTOR_ERR_MESSAGE_EMAIL, name: 'Валидационная ошибка email', root: this.root });
        this.messageErrPassword = new Text({page, locator: SELECTOR_ERR_MESSAGE_PASSWORD, name: 'Валидационная ошибка password', root: this.root });
    };

    async modalIsOpened(): Promise<void> {
        await this.titleModal.shouldBeVisible();
        await this.emailInput.shouldBeVisible();
        await this.passwordInput.shouldBeVisible();
        await this.enterBtn.shouldBeVisible();
    };
}

