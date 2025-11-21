import { searchTest as test } from '@/tests/tests';
import { expect } from '@playwright/test';
import { usersAuth } from '@/data/userAuthorization';
import { autorizationExpect } from '@/data/pages/authorization.expect';
import { textExpect } from '@/data/testText';

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

    test(`${name} - Авторизация нажатием на Enter`, async({contextPage, ModalAuth, AuthorizationPage, ServiceListPage}) => {
      const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};

      await pages[nameFixture].authOpened();
      await pages[nameFixture].componentAuth.fillFieldAuth(usersAuth.validUser.email, usersAuth.validUser.password);
      await contextPage.keyboard.press('Enter');

      await ServiceListPage.urlСheck();
    });

  };
});

test.describe('Авторизация. Валидация ошибок', { tag: '@Test-combined' }, () => {
    const {emailNotEntered, passNotEntered, emailNotCorrect, passNotEnoughCharacters, notifyText} = autorizationExpect.validation;

    test.beforeEach(async ({HomePage}) => {
        await HomePage.visit()
    });

    for (const { nameFixture, name } of navigationTests) {
      test(`${name} - Валидация после пустой отправки полей`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};

          await pages[nameFixture].authOpened();
          await pages[nameFixture].authorization(usersAuth.emptyField.email, usersAuth.emptyField.password);

          await pages[nameFixture].componentAuth.errEmail.shouldHaveText(emailNotEntered);
          await pages[nameFixture].componentAuth.errPass.shouldHaveText(passNotEntered);
      });

      test(`${name} - Валидация на некорректные данные в email и пароль`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};

          await pages[nameFixture].authOpened();
          await pages[nameFixture].authorization(usersAuth.notCorrectUSer.email, usersAuth.notCorrectUSer.password); 

          await pages[nameFixture].componentAuth.errEmail.shouldHaveText(emailNotCorrect);
          await pages[nameFixture].componentAuth.errPass.shouldHaveText(passNotEnoughCharacters);
      });

      test(`${name} - Ввести несуществующий email, но валидный пароль`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};

          await pages[nameFixture].authOpened();
          await pages[nameFixture].authorization(usersAuth.wrongPassword.email, usersAuth.wrongPassword.password);

          await pages[nameFixture].componentAuth.errNotify.shouldHaveText(notifyText)
      });
    };

});

test.describe('Авторизация. Очистка полей/закрытие модалки/кнопки клавиатуры', { tag: '@Test-combined' }, () => {

    test.beforeEach(async ({ HomePage }) => {
        await HomePage.visit()
    });

    for (const { nameFixture, name } of navigationTests) {
      test(`${name} - Крестика "очистить поле" email нет если ничего не введено`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.emailInput.clear();
          await pages[nameFixture].componentAuth.emailClearBtn.shouldBeNotVisible();
      });

      test(`${name} - Крестика "очистить поле" password нет если ничего не введено`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.passwordInput.clear();
          await pages[nameFixture].componentAuth.passClearBtn.shouldBeNotVisible();
      });

      test(`${name} - Крестик "очистить поле" email появляется если поле не пустое`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.emailInput.fill(textExpect.oneLetter, {validateValue: true});
          await pages[nameFixture].componentAuth.emailClearBtn.shouldBeVisible();
      });

      test(`${name} - Крестик "очистить поле" password появляется если поле не пустое`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.passwordInput.fill(textExpect.oneLetter, {validateValue: true});
          await pages[nameFixture].componentAuth.passClearBtn.shouldBeVisible();
      });

      test(`${name} - Крестик "очистить поле" очищает поле email`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.emailInput.fill(textExpect.email);
          await pages[nameFixture].componentAuth.emailInput.shouldHaveValue(textExpect.email);

          await pages[nameFixture].componentAuth.emailClearBtn.click();
          await pages[nameFixture].componentAuth.emailInput.shouldHaveValue(textExpect.emptyString);
      });

      test(`${name} - Крестик "очистить поле" очищает поле password`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.passwordInput.fill(textExpect.password);
          await pages[nameFixture].componentAuth.passwordInput.shouldHaveValue(textExpect.password);

          await pages[nameFixture].componentAuth.passClearBtn.click();
          await pages[nameFixture].componentAuth.emailInput.shouldHaveValue(textExpect.emptyString);
      });

      test(`${name} - Крестик "очистить поле" в поле email пропадает когда поле остается пустым`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.emailInput.fill(textExpect.email);
          await pages[nameFixture].componentAuth.emailClearBtn.shouldBeVisible();

          await pages[nameFixture].componentAuth.emailInput.clear();
          await pages[nameFixture].componentAuth.emailClearBtn.shouldBeNotVisible();
      });

      test(`${name} - Крестик "очистить поле" в поле password пропадает когда поле остается пустым`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.passwordInput.fill(textExpect.email);
          await pages[nameFixture].componentAuth.passClearBtn.shouldBeVisible();

          await pages[nameFixture].componentAuth.passwordInput.clear();
          await pages[nameFixture].componentAuth.passClearBtn.shouldBeNotVisible();
      });

      test(`${name} - Меняется type поля пароль при клике на "показать пароль"`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.passwordInput.fill(textExpect.password, {validateValue: true});

          await pages[nameFixture].componentAuth.passwordInput.checkingAttributeValue('type', 'password');
          await pages[nameFixture].componentAuth.showhiddenPassbtn.click();
          await pages[nameFixture].componentAuth.passwordInput.checkingAttributeValue('type', 'text');

      });

      test(`${name} - Глазик "Показать пароль" в поле password пропадает когда поле остается пустым`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.passwordInput.fill(textExpect.email);
          await pages[nameFixture].componentAuth.showhiddenPassbtn.shouldBeVisible();

          await pages[nameFixture].componentAuth.passwordInput.clear();
          await pages[nameFixture].componentAuth.showhiddenPassbtn.shouldBeNotVisible();
      });

      test(`${name} - Глазик "Показать пароль" password появляется если поле не пустое`, async({ModalAuth, AuthorizationPage}) => {
          const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
          await pages[nameFixture].componentAuth.passwordInput.fill(textExpect.oneLetter, {validateValue: true});
          await pages[nameFixture].componentAuth.showhiddenPassbtn.shouldBeVisible();
      });
    }

}); 


test.describe('Авторизация - отдельные тесты для модалки', { tag: '@Test-modal' }, () => {

  test.beforeEach(async ({ HomePage }) => {
    await HomePage.visit();
  });

    test(`${name} - Закрытие модалки нажатием на крестик`, async({ModalAuth, AuthorizationPage}) => {
        const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
        await pages[nameFixture].componentAuth.closeModalBtn.click();
    });

    test(`${name} - Закрытие модалки нажатием на Esc`, async({contextPage, ModalAuth, AuthorizationPage}) => {
        const pages = { modalAuth: ModalAuth, pageAuth: AuthorizationPage};
        await Promise.all([
            await contextPage.keyboard.press('Escape'),
            contextPage.waitForURL('/')
        ]);

        const currentUrl = contextPage.url();
        expect(currentUrl).not.toContain(pages[nameFixture].url);
    });

});

test.describe('Авторизация - отдельные тесты для страницы', { tag: '@Test-page' }, () => {

  test.beforeEach(async ({ HomePage }) => {
    await HomePage.visit();
  });

  test('', async ({}) => {

  });

});