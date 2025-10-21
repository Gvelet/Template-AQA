import { searchTest as test } from '@/tests/tests';

test.describe('Главная страница', () => {

    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()

    });

    test('Проверка заголовка модалки', async({HomePage}) => {
        await HomePage.titlePage.click()
    });

})