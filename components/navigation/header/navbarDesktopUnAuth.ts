import { Page } from "@playwright/test";
import { Link } from '@/page-factory/link'

import {
    SELECTOR_ABOUTUS_LINK,
    SELECTOR_GLOSSARY_LINK,
    SELECTOR_LIBRARY_LINK,
    SELECTOR_AUTH_LOGIN_LINK,
    SELECTOR_ESTATE_LIST_LINK
} from '@/components/navigation/header/navbar.const';

export class NavbarDesktopUnAuth {
    readonly rootNav: string = '.app-header__desktop';

    private readonly aboutUsLink: Link;
    private readonly glossaryLink: Link;
    private readonly libraryLink: Link;
    private readonly estatelistLink: Link;
    private readonly authLoginLink: Link;

    constructor(public page: Page){
        this.aboutUsLink = new Link({ page, locator: SELECTOR_ABOUTUS_LINK, name: 'Ссылка "О нас" у неавторизованного', root: this.rootNav }); 
        this.glossaryLink = new Link({ page, locator: SELECTOR_GLOSSARY_LINK, name: 'Ссылка "Глоссарий" у неавторизованного', root: this.rootNav });
        this.libraryLink = new Link({ page, locator: SELECTOR_LIBRARY_LINK, name: 'Ссылка "Библиотека документов" у неавторизованного', root: this.rootNav });
        this.estatelistLink = new Link({ page, locator: SELECTOR_ESTATE_LIST_LINK, name: 'Ссылка "Поиск недвижимости" у неавторизованного', root: this.rootNav });
        this.authLoginLink = new Link({page, locator: SELECTOR_AUTH_LOGIN_LINK, name: 'Кнопка открытия модалки авторизации', root: this.rootNav }) 
    };


 }