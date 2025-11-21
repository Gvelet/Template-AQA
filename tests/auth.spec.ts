import { searchTest as test } from '@/tests/tests';
import { expect } from '@playwright/test';
import { usersAuth } from '@/data/userAuthorization';
import { autorizationExpect } from '@/data/pages/authorization.expect';

const navigationTests = [
  { nameFixture: 'modalAuth', name: 'Модалка авторизации' },
  { nameFixture: 'pageAuth', name: 'Страница авторизации' },
];

test.describe(`Авторизация. Проверка контента`, { tag: '@Test-combined' }, () => {
  test.beforeEach(async ({ HomePage }) => {
    await HomePage.visit();
  });

  for (const { nameFixture, name } of navigationTests) {

    test(`url ${name} верный при открытии`, {tag: '@smoke'}, async({contextPage, ModalAuth, AuthorizationPage}) => {
      const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};

      await pages[nameFixture].authOpened();
      const currentUrl = contextPage.url();
      expect(currentUrl).toContain(pages[nameFixture].url);
    });

    test(`${name} - проверка заголовка`, async ({ModalAuth, AuthorizationPage}) => {
      const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
      const expectedTitle = autorizationExpect.authorizationExpect.title;

      await pages[nameFixture].authOpened();
      await pages[nameFixture].componentAuth.title.shouldHaveText(expectedTitle)
    });

    test(`${name} - Верный текст кнопок - Войти, Зарегестрироваться, забыл пароль`, async({ModalAuth, AuthorizationPage}) => {
      const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};

      const expectedBtnLogin = autorizationExpect.authorizationExpect.btnLogin
      const expectedBtnRegistartion = autorizationExpect.authorizationExpect.btnRegistration
      const expectedBtnForgotPass = autorizationExpect.authorizationExpect.btnPassword

      await pages[nameFixture].authOpened();
      await pages[nameFixture].componentAuth.enterBtn.shouldHaveText(expectedBtnLogin);
      await pages[nameFixture].componentAuth.registrationBtn.shouldHaveText(expectedBtnRegistartion);
      await pages[nameFixture].componentAuth.forgetPassBtn.shouldHaveText(expectedBtnForgotPass);
    });

    test(`${name} - placeholder полей верные`, async({ModalAuth, AuthorizationPage}) => {
      const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
      
      const expectedPlaceholderEmail = autorizationExpect.authorizationExpect.placeholderEmail;
      const expectedPlaceholderPass = autorizationExpect.authorizationExpect.placeholderPass;

      await pages[nameFixture].authOpened();
      await pages[nameFixture].componentAuth.emailInput.checkingAttributeValue('placeholder', expectedPlaceholderEmail);
      await pages[nameFixture].componentAuth.passwordInput.checkingAttributeValue('placeholder', expectedPlaceholderPass);
    });

  };
});

test.describe(`Авторизация`, { tag: '@Test-combined' }, () => {
  test.beforeEach(async ({ HomePage }) => {
    await HomePage.visit();
  });

  for (const { nameFixture, name } of navigationTests) {

    test(`${name} - вход c валидными данными`, async ({ModalAuth, AuthorizationPage}) => {
      const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};

      await pages[nameFixture].authorization(usersAuth.validUser.email, usersAuth.validUser.password);
    });

    test(`${name} - редирект после авторизации`, async ({ModalAuth, AuthorizationPage, ServiceListPage}) => {
      const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};

      await pages[nameFixture].authorization(usersAuth.validUser.email, usersAuth.validUser.password);
      await ServiceListPage.urlСheck();
    });

  };
});


test.describe('Авторизация - отдельные тесты для модалки', { tag: '@Test-modal' }, () => {

  test.beforeEach(async ({ HomePage }) => {
    await HomePage.visit();
  });

  test('', async ({}) => {

  });

});

test.describe('Авторизация - отдельные тесты для страницы', { tag: '@Test-page' }, () => {

  test.beforeEach(async ({ HomePage }) => {
    await HomePage.visit();
  });

  test('', async ({}) => {

  });

});
