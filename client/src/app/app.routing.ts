import { RouterModule, Routes, Resolve } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

import { ItemsListComponent } from './itemsList/itemsList.component';
import { ErrorComponent } from './error/error.component';
import { ItemListResolver } from './itemsList/items.resolver';
import { AddItemComponent } from './addItem/addItem.component';
import { SingleItemComponent } from './eachItem/eachItem.component';
import { SingleItemResolver } from './eachItem/eachItem.resolver';

const appRoutes: Routes = [
    {
		path:'',
		redirectTo:'items/add',
		pathMatch: 'full',
		canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
	{
		path:'items',
		component: ItemsListComponent,
		resolve: {
			items: ItemListResolver
		}
	},{
		path: 'items/add',
		component: AddItemComponent
	},{
		path: 'items/:id',
		component: SingleItemComponent,
		resolve: {
			item: SingleItemResolver
		}
	},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);