// Фикстура страниц для удобного вызыва
import {Fixtures} from '@playwright/test';
import {HomePage} from '@/pages/pages-site/home-page/homePage';
import {AuthorizationPage} from '@/pages/pages-site/authPage';
import {ContextPagesFixture} from '@/fixtures/fixtures-context';
import { ServiceListPage } from '@/pages/pages-personal_account/serviceList/servicelist';

export type PageFixture = {
    HomePage: HomePage;
    AuthorizationPage: AuthorizationPage;
    ServiceListPage: ServiceListPage;
};

export const pageFixture: Fixtures<PageFixture, ContextPagesFixture> = {
    HomePage: async ({contextPage}, use) => {
        const akvartoHomePage = new HomePage(contextPage);

        await use(akvartoHomePage)
    },

    AuthorizationPage: async ({contextPage}, use) => {
        const akvartoAuthPage = new AuthorizationPage(contextPage);

        await use(akvartoAuthPage)
    },

    ServiceListPage: async ({contextPage}, use) => {
        const akvartoServiceListPage = new ServiceListPage(contextPage);

        await use(akvartoServiceListPage);
    }
}