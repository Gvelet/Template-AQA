// Фикстура страниц page для удобного вызыва
import {Fixtures} from '@playwright/test';
import {AkvartoHomePage} from '../pages/pages-site/akvartoHomePage.ts';
import {ContextPagesFixture} from './fixtures-context';

export type PageFixture = {
    akvartoHomePage: AkvartoHomePage;
};

export const pageFixture: Fixtures<PageFixture, ContextPagesFixture> = {
    akvartoHomePage: async ({contextPage}, use) => {
        const akvartoHomePage = new AkvartoHomePage(contextPage);

        await use(akvartoHomePage)
    }
}