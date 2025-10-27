import { test as base } from '@playwright/test';
import { ContextPagesFixture, contextPagesFixture } from '@/fixtures/fixtures-context';
import { PageFixture, pageFixture } from '@/fixtures/fixtures-pages';
import { AuthFixture, authFixture } from '@/fixtures/fistures-auth';
import { combineFixtures } from '@/utils/mocks/fixtures';

// Объеденяем все фикстуры в одну для удобства
export const searchTest = base.extend<ContextPagesFixture & PageFixture & AuthFixture>( //Перечисляем типы фикстуры
  combineFixtures(contextPagesFixture, pageFixture, authFixture) //Перечисляем и объеденяем фикстуры
);
