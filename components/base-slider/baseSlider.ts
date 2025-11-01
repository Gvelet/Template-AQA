// Компонент слайдера с двумя стрелками с карточками статей

import { Page } from "@playwright/test";
import { Button } from "@/page-factory/button";
import { Text } from "@/page-factory/text";
import { Image } from "@/page-factory/image";
import { Title } from "@/page-factory/title";
import {
    SELECTOR_NEXT_BTN,
    SELECTOR_PREV_BTN,
    SELECTOR_SLIDER_TITLE
} from '@/components/base-slider/baseSlider.const'

export class BaseSlider {
    readonly root: string;
    readonly sliderBtnNext: Button;
    readonly sliderBtnPrev: Button;
    readonly sliderTitle: Title;

    constructor(page: Page, root:string){
        this.root = root || '.base-slider';
        this.sliderBtnNext = new Button({page, locator: SELECTOR_NEXT_BTN, name: 'Кнопка "Следующий слайд"', root: this.root});
        this.sliderBtnPrev = new Button({page, locator: SELECTOR_PREV_BTN, name: 'Кнопка "Предыдущий слайд"', root: this.root});
        this.sliderTitle = new Button({page, locator: SELECTOR_SLIDER_TITLE, name: 'Заголовок слайдера', root: this.root});
    }

}