import { searchTest as test } from '@/tests/tests';

test.describe('Главная страница', {tag: '@Test-header'}, () => {

    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()
    });

    test('Переход по ссылке "Глоссарий" в header', {tag: '@test-nav-menu'}, async ({HomePage}) => {
        await HomePage.navUnAuthDesktop.clickGlossaryLink()
    })

    test('Переход по ссылке "Библиотека документов" в header', {tag: '@test-nav-menu'}, async ({HomePage}) => {
        await HomePage.navUnAuthDesktop.clickLibraryLink();
    })

})