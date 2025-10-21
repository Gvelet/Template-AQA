import { test as base } from '@playwright/test';
import { ContextPagesFixture, contextPagesFixture } from '@/fixtures/fixtures-context';
import { PageFixture, pageFixture } from '@/fixtures/fixtures-pages';
import { combineFixtures } from '@/utils/mocks/fixtures';

// Объеденяем все фикстуры в одну для удобства
export const searchTest = base.extend<ContextPagesFixture, PageFixture>( //Перечисляем типы фикстуры
  combineFixtures(contextPagesFixture, pageFixture) //Перечисляем и объеденяем фикстуры
);
