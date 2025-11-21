import { Fixtures } from "@playwright/test";
import { AuthorizationPage } from "@/pages/pages-site/authPage";
import {ContextPagesFixture} from '@/fixtures/fixtures-context';
import { usersAuth } from "@/data/userAuthorization";

export type AuthFixture = {
    authValidPage: AuthorizationPage
}

export const authFixture: Fixtures<AuthFixture, ContextPagesFixture> = {
    authValidPage: async ({contextPage}, use) => {
        const authPage = new AuthorizationPage(contextPage);
        await authPage.authorization(usersAuth.validUser.email, usersAuth.validUser.password);
        
        await use(authPage)
    }
}