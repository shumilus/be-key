// modules
import {NgModule} from '@angular/core';
import {AppMaterialModule} from './app-material.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

import {ShortenWordPipe} from '../pipes/shorten-word.pipe';
import {SortNamePipe} from '../pipes/sort-name.pipe';
import {SearchPipe} from '../pipes/search.pipe';

@NgModule({
    declarations: [
        ShortenWordPipe,
        SortNamePipe,
        SearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        AppMaterialModule,
        NgxPaginationModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        AppMaterialModule,
        NgxPaginationModule,
        ShortenWordPipe,
        SortNamePipe,
        SearchPipe
    ]
})

export class SharedModule {
}
