import { Page } from "@playwright/test";
import { BasePage } from "@/pages/base-page"
import { Title } from '@/page-factory/title';

import {
    SELECTOR_TITLE_PAGE
} from '@/pages/pages-personal_account/serviceList/serviceList.const';

export class ServiceListPage extends BasePage{
    readonly url: string = '/service/list';
    readonly root: string = '.layout-service__main-content';

    readonly titlePage: Title;

    constructor(public page: Page){
        super(page);
        this.titlePage = new Title({page, locator: SELECTOR_TITLE_PAGE, name: 'Заголовок страницы', root: this.root});
    }
}