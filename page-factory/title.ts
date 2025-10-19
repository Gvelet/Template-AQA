import { test } from '@playwright/test';
import { LocatorProps } from '../types/page-factory/component';
import { Component } from './component';

export class Title extends Component{
    get typeOf(): string{
        return 'title'
    }

    
}