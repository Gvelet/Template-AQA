import { searchTest as test } from '@/tests/tests';
import { Page } from '@playwright/test';
import { ModalAuth } from '@/components/modals/modalAuth/authModal';
import { AuthorizationPage } from '@/pages/pages-site/authPage';

test.describe('Авторизация - общие тесты модалка/страница', {tag: '@Test-combined'}, () => {
    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()
    });

    test('', async ({}) => {

    })

});

test.describe('Авторизация - отдельные тесты для модалки', {tag: '@Test-modal'}, () => {

    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()
    });

    test('', async ({}) => {

    })

});

test.describe('Авторизация - отдельные тесты для страницы', {tag: '@Test-page'}, () => {

    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()
    });

    test('', async ({}) => {

    })

});