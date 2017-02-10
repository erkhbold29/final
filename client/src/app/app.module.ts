import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { BaseRequestOptions } from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { ItemsListComponent } from './itemsList/itemsList.component';
import { ItemsService } from './itemsList/items.service';
import { ErrorComponent } from './error/error.component';
import { AddItemService } from './addItem/addItem.service';
import { SearchService } from './Search/Search.service';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';

import { ItemListResolver } from './itemsList/items.resolver';
import { AddItemComponent } from './addItem/addItem.component';
import { SingleItemComponent } from './eachItem/eachItem.component';
import { SingleItemResolver } from './eachItem/eachItem.resolver';
import { SearchComponent } from './Search/Search.component';
import { RegisterComponent } from './register/index';

@NgModule({
	declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
		ItemsListComponent,
		SingleItemComponent,
		AddItemComponent,
		ErrorComponent,
		SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		DatePickerModule
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
		ItemsService,
		ItemListResolver,
		SingleItemResolver,
		AddItemService,
		SearchService    
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }