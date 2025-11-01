import { searchTest as test } from '@/tests/tests';
import { BaseSlider } from './baseSlider';

export async function sliderarArticlesTest(root, title){
    test(`Проверка заголовка `, async({contextPage}) => {
        const ComponentPage = new BaseSlider(contextPage, root);
        const titleComponent = ComponentPage.sliderTitle;

        await titleComponent.shouldHaveText(title)
    });

    test(`Слайды переключаются вперед `, async({contextPage}) => {
        const ComponentPage = new BaseSlider(contextPage, root);
        await ComponentPage.sliderBtnNext.click();
    });

    test(`Слайды переключаются назад `, async({contextPage}) => {
        const ComponentPage = new BaseSlider(contextPage, root);
        await ComponentPage.sliderBtnPrev.click();
    });
}