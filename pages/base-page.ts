// Базовая страница для всех страниц
import {test, Page} from '@playwright/test';
import { NavbarDesktopAuth } from '@/components/navigation/header/navbarDesktopAuth';
import { NavbarDesktopUnAuth } from '@/components/navigation/header/navbarDesktopUnAuth';

export class BasePage {
    readonly navAuthDesktop: NavbarDesktopAuth;
    readonly navUnAuthDesktop: NavbarDesktopUnAuth;
    
    public readonly url: string = '/';
    public readonly root: string = '';
    
    constructor(public page: Page){
        this.navAuthDesktop = new NavbarDesktopAuth(page);
        this.navUnAuthDesktop = new NavbarDesktopUnAuth(page);
    }

    // Открытие url страницы
    async visit(): Promise<void>{
        await test.step(`Открытие страницы ${this.url}`, async () => {
            await this.page.goto(this.url, {waitUntil: 'networkidle'});
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