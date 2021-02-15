import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: SearchComponent },
  { path: 'items/:id', component: ItemComponent }
  // { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
