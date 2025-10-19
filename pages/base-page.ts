// Базовая страница для всех страниц
import {test, Page} from '@playwright/test';
import { Navbar } from '../components/navigation/navbar';

export class BasePage {
    readonly navbar: Navbar;

    constructor(public page: Page){
        this.navbar = new Navbar(page);
    }

    // Открытие url страницы
    async visit(url: string): Promise<void>{
        await test.step(`Открытие страницы ${url}`, async () => {
            await this.page.goto(url, {waitUntil: 'networkidle'});
        }
    )};

    // Перезагрузка текущей страницы
    async reload(): Promise<void>{
        const currenUrl = this.page.url();

        await test.step(`Перезагрузка страницы ${currenUrl}`, async () => {
            await this.page.reload({waitUntil: 'networkidle'})
        });
    }

    // Получение заголовка страницы
    async getTitle(): Promise<string> {
        return await test.step(`Получаем url страницы -`, async () => { //Добавить ${url страницы или другое обозначение текущей страницы}!!!!!
            return await this.page.title();
        });
    };

    // Изменение размера окна браузера
    async setViewportSize(width: number, height: number): Promise<void> {
        await test.step(`Изменение размера окна на ${width}x${height}`, async () => {
            await this.page.setViewportSize({ width, height });
        });
    }


}