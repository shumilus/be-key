import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserService} from './shared/services/user.service';
import {ApiService} from './shared/services/api.service';
import {ToasterModule} from 'angular2-toaster';
import {SharedModule} from './shared/modules/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './users/user/user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserInfoComponent } from './users/user-info/user-info.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        AddUserComponent,
        UserInfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ToasterModule.forRoot(),
        SharedModule,
        BrowserAnimationsModule
    ],
    providers: [
        ApiService,
        UserService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    entryComponents: [
        AddUserComponent,
        UserInfoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
