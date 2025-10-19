// Страница на нашем сайте
import { Page } from "@playwright/test";
import { BasePage } from "../base-page";
import { Title } from '../../page-factory/title';

export class AkvartoHomePage extends BasePage{

    readonly titlePage: Title;
    constructor(public page: Page){
        super(page);
        this.titlePage = new Title({page, locator: '.board-search__title', name: 'Заголовок страницы'});

    }
}