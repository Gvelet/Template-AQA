// Страница на нашем сайте
import { Page } from "@playwright/test";
import { BasePage } from "@/pages/base-page";
import { Title } from '@/page-factory/title';
import { NavbarDesktopAuth } from '@/components/navigation/header/navbarDesktopAuth';

export class HomePage extends BasePage{
    readonly url: string = '/library';
    readonly root: string = '.home-page__container-main';

    readonly titlePage: Title;
    constructor(public page: Page){
        super(page);
        this.titlePage = new Title({page, locator: `.board-search__title`, name: 'Заголовок страницы', root: this.root});
    }
}