import { searchTest as test } from '@/tests/tests';
import { Page } from '@playwright/test';
import { sliderarArticlesTest } from '@/components/base-slider/baseSlider-tests';


test.describe('Главная страница-1', () => {

    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()
    });

    test('Переход по ссылке "Глоссарий" в header', async ({HomePage}) => {
        await HomePage.navUnAuthDesktop.clickGlossaryLink()
    })

    sliderarArticlesTest('.more-articles', 'Статьи');

});

test.describe('Раздел "Статьи" - проверка слайдера', () => {
    
    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()
    });

    sliderarArticlesTest('.more-articles', 'Статьи');
});

test.describe('Раздел "Популярное" - проверка слайдера', () => {
    
    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()
    });

    sliderarArticlesTest('.blog-most-popular', 'Популярное');
});
