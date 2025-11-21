import { test as base } from '@playwright/test';
import { ContextPagesFixture, contextPagesFixture } from '@/fixtures/fixtures-context';
import { PageFixture, pageFixture } from '@/fixtures/fixtures-pages';
import { AuthFixture, authFixture } from '@/fixtures/fixtures-auth';
import { ComponentsFixture, componentsFixture } from '@/fixtures/fixtures-components';
import { combineFixtures } from '@/utils/mocks/fixtures';

export const searchTest = base.extend<ContextPagesFixture & PageFixture & AuthFixture & ComponentsFixture>( 
  combineFixtures(contextPagesFixture, componentsFixture, pageFixture, authFixture) 
);
