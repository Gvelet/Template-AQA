// Компонент и абстрактный класс для page-factory
import {test, Page, expect, Locator } from "@playwright/test"
import { ComponentProps, LocatorProps } from '../types/page-factory/component.ts';
import { locatorTemplateFormat } from "../utils/mocks/page-factory.ts";


export abstract class Component {
    page: Page;
    locator: string;
    private name: string | undefined;

    constructor({page, locator, name}: ComponentProps){
        this.page = page;
        this.locator = locator;
        this.name = name;
    }

    // Возвращает Locator, используя шаблон и параметры.
    getLocator(props: LocatorProps = {}): Locator{
        const {locator, ...context} = props; //Из объекта props извлекается свойство locator. Остальные свойства размещаются в объект context.
        // props = {
        //   locator: "//div[@data-id='{id}']",
        //   id: 123,
        //   name: 'Test'
        // }
        const withTemplate = locatorTemplateFormat(locator || this.locator, context); //если свойство locator есть — используется оно, иначе применяется значение this.locator, заданное в объекте.

        return this.page.locator(withTemplate);
    }
}