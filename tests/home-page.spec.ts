import { searchTest as test } from '@/tests/tests';

test.describe('Главная страница', {tag: '@Test-header'}, () => {

    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()
    });

    test('Переход по ссылке "Глоссарий" в header', {tag: '@test-nav-menu'}, async ({HomePage, authValidPage}) => {
        await HomePage.navUnAuthDesktop.clickGlossaryLink()
    })

    test('Переход по ссылке "Библиотека документов" в header', {tag: '@test-nav-menu'}, async ({HomePage}) => {
        await HomePage.navUnAuthDesktop.clickLibraryLink();
    })

})

// Tags - можно использовтаь теги для запсука отедльынх тестов и названия групп в отчете
// @end-to-end — end-to-end тесты. 
// @regression — регрессионные тесты. 
// @smoke — базовые проверки, критичные для быстрой проверки. 
// @critical — важные, критичные тесты. 
// @login — тесты авторизации. 
// @signup — тесты регистрации.
// @slow — медленные тесты.
// @api — тесты API.
// @database — тесты, связанные с базой данных.
// @mobile — тесты на мобильных устройствах.
// @desktop — тесты на десктопе.
// @payment — тесты платежных процессов.
// @expiration — тесты, связанные с истечением срока или датами.
// @fail — тесты, которые в данный момент fail.
// @deprecated — устаревшие или временно отключенные тесты.