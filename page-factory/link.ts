import { test } from '@playwright/test';
import { LocatorProps } from '../types/page-factory/component';
import { Component } from './component';

export class Link extends Component{
    get typeOf(): string{
        return 'link'
    }

    
}