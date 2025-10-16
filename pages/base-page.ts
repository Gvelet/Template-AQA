// Базовая страница для всех страниц
import {test, Page} from '@playwright/test';
import { Navbar } from '../components/navigation/navbar';

export class BasePage {
    readonly navbar: Navbar;

    constructor(public page: Page){
        this.navbar = new Navbar(page);
    }

    async visit(url: string): Promise<void>{
        await test.step(`Открытие страницы ${url}`, async () => {
            await this.page.goto(url, {waitUntil: 'networkidle'});
        }
    )};

    async reload(): Promise<void>{
        const currenUrl = this.page.url();

        await test.step(`Перезагрузка страницы ${currenUrl}`, async () => {
            await this.page.reload({waitUntil: 'networkidle'})
        });
    }
}