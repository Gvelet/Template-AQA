import { Page } from "@playwright/test";
import { Link } from '@/page-factory/link'

import {
    SELECTOR_ABOUTUS_LINK,
    SELECTOR_GLOSSARY_LINK,
    SELECTOR_LIBRARY_LINK,
    SELECTOR_AUTH_LOGIN_LINK,
    SELECTOR_ESTATE_LIST_LINK,
    SELECTOR_LOGO_LINK
} from '@/components/navigation/header/navbar.const';

export class NavbarDesktopUnAuth {
    readonly rootNav: string;

    private readonly aboutUsLink: Link;
    private readonly glossaryLink: Link;
    private readonly libraryLink: Link;
    private readonly estatelistLink: Link;
    private readonly authLoginLink: Link;
    private readonly logoLink: Link;

    constructor(public page: Page, root?: string){
        this.rootNav = root || '.app-header__desktop';

        this.aboutUsLink = new Link({ page, locator: SELECTOR_ABOUTUS_LINK, name: '"О нас" у неавторизованного', root: this.rootNav }); 
        this.glossaryLink = new Link({ page, locator: SELECTOR_GLOSSARY_LINK, name: '"Глоссарий" у неавторизованного', root: this.rootNav });
        this.libraryLink = new Link({ page, locator: SELECTOR_LIBRARY_LINK, name: 'Ссылка "Библиотека документов" у неавторизованного', root: this.rootNav });
        this.estatelistLink = new Link({ page, locator: SELECTOR_ESTATE_LIST_LINK, name: 'Ссылка "Поиск недвижимости" у неавторизованного', root: this.rootNav });
        this.authLoginLink = new Link({page, locator: SELECTOR_AUTH_LOGIN_LINK, name: 'Кнопка открытия модалки авторизации', root: this.rootNav }) 
        this.logoLink = new Link({ page, locator: SELECTOR_LOGO_LINK, name: 'Логотип сайта в header' });
    };

    async clickAboutUsLink(): Promise<void> {
        await this.aboutUsLink.click();
    };

    async clickGlossaryLink(): Promise<void> {
        await this.glossaryLink.click();
    };

    async clickLibraryLink(): Promise<void> {
        await this.libraryLink.click();
    };

    async clickEstatelistLink(): Promise<void> {
        await this.estatelistLink.click();
    };

    async clickLogoLink(): Promise<void> {
        await this.logoLink.click();
    };

    async openModalAuth(): Promise<void> {
        await this.authLoginLink.shouldBeVisible();

        await this.authLoginLink.hover()
        await this.authLoginLink.click();
    };
    
 }