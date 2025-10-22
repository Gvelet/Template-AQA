import { Page } from "@playwright/test";
import { Link } from '@/page-factory/link'

import {
    SELECTOR_ABOUTUS_LINK,
    SELECTOR_ARTICLES_LINK,
    SELECTOR_FAVORITES_LINK,
    SELECTOR_GLOSSARY_LINK,
    SELECTOR_LIBRARY_LINK,
    SELECTOR_SAVED_SEARCH_LINK,
    SELECTOR_SERVICE_LINK,
    SELECTOR_LOGO_LINK
} from '@/components/navigation/header/navbar.const';

// Компонент Навигационного меню в header
export class NavbarDesktopAuth {
    readonly rootNav: string;

    private readonly articlesLink: Link;
    private readonly aboutUsLink: Link;
    private readonly glossaryLink: Link;
    private readonly libraryLink: Link;
    private readonly favoritesLink: Link;
    private readonly searchSavedLink: Link;
    private readonly personalAccountLink: Link;
    private readonly logoLink: Link;

    constructor(public page: Page, root?: string){
        this.rootNav = root || '.app-header__desktop';

        this.articlesLink = new Link({ page, locator: SELECTOR_ARTICLES_LINK, name: 'Ссылка "Статьи" у авторизованного', root: this.rootNav });
        this.aboutUsLink = new Link({ page, locator: SELECTOR_ABOUTUS_LINK, name: 'Ссылка "О нас" у авторизованного', root: this.rootNav }); 
        this.glossaryLink = new Link({ page, locator: SELECTOR_GLOSSARY_LINK, name: 'Ссылка "Глоссарий" у авторизованного', root: this.rootNav });
        this.libraryLink = new Link({ page, locator: SELECTOR_LIBRARY_LINK, name: 'Ссылка "Библиотека документов" у авторизованного', root: this.rootNav });
    
        this.favoritesLink = new Link({ page, locator: SELECTOR_FAVORITES_LINK, name: 'Ссылка "Избранное" у авторизованного', root: this.rootNav });
        this.searchSavedLink = new Link({ page, locator: SELECTOR_SAVED_SEARCH_LINK, name: 'Ссылка "Мои поиски" у авторизованного', root: this.rootNav });
        this.personalAccountLink = new Link({ page, locator: SELECTOR_SERVICE_LINK, name: 'Ссылка "Поиск недвижимости" у авторизованного', root: this.rootNav });
        this.logoLink = new Link({ page, locator: SELECTOR_LOGO_LINK, name: 'Логотип сайта в header' });
    };

    async clickBlogLink(): Promise<void> {
        await this.articlesLink.click();
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

    async clickFavoritesLink(): Promise<void> {
        await this.favoritesLink.click();
    };

    async clickSearchSavedLink(): Promise<void> {
        await this.searchSavedLink.click();
    };

    async clickPersonalAccountLink(): Promise<void> {
        await this.personalAccountLink.click();
    };

    async clickLogoLink(): Promise<void> {
        await this.logoLink.click();
    };


 }