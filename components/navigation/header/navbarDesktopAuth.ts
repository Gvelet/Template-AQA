import { Page } from "@playwright/test";
import { Link } from '@/page-factory/link'

import {
    SELECTOR_ABOUTUS_LINK,
    SELECTOR_ARTICLES_LINK,
    SELECTOR_FAVORITES_LINK,
    SELECTOR_GLOSSARY_LINK,
    SELECTOR_LIBRARY_LINK,
    SELECTOR_SAVED_SEARCH_LINK,
    SELECTOR_SERVICE_LINK
} from '@/components/navigation/header/navbar.const';

// Компонент Навигационного меню в header
export class NavbarDesktopAuth {
    readonly rootNav: string = '.app-header__desktop';

    private readonly articlesLink: Link;
    private readonly aboutUsLink: Link;
    private readonly glossaryLink: Link;
    private readonly libraryLink: Link;
    private readonly favoritesLink: Link;
    private readonly searchSavedLink: Link;
    private readonly personalAccountLink: Link;

    constructor(public page: Page){
        this.articlesLink = new Link({ page, locator: SELECTOR_ARTICLES_LINK, name: 'Ссылка "Статьи" у авторизованного', root: this.rootNav });
        this.aboutUsLink = new Link({ page, locator: SELECTOR_ABOUTUS_LINK, name: 'Ссылка "О нас" у авторизованного', root: this.rootNav }); 
        this.glossaryLink = new Link({ page, locator: SELECTOR_GLOSSARY_LINK, name: 'Ссылка "Глоссарий" у авторизованного', root: this.rootNav });
        this.libraryLink = new Link({ page, locator: SELECTOR_LIBRARY_LINK, name: 'Ссылка "Библиотека документов" у авторизованного', root: this.rootNav });
        
        this.favoritesLink = new Link({ page, locator: SELECTOR_FAVORITES_LINK, name: 'Ссылка "Избранное" у авторизованного', root: this.rootNav });
        this.searchSavedLink = new Link({ page, locator: SELECTOR_SAVED_SEARCH_LINK, name: 'Ссылка "Мои поиски" у авторизованного', root: this.rootNav });
        this.personalAccountLink = new Link({ page, locator: SELECTOR_SERVICE_LINK, name: 'Ссылка "Поиск недвижимости" у авторизованного', root: this.rootNav });
    };


 }