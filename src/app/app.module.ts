import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { SearchComponent } from './components/search/search.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsService } from './services/items.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { SeparadorMilesPipe } from './pipes/separador-miles.pipe';
import { DecimalesPipe } from './pipes/decimales.pipe';
import { CondicionPipe } from './pipes/condicion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HomeComponent,
    SearchComponent,
    ItemComponent,
    SeparadorMilesPipe,
    DecimalesPipe,
    CondicionPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [ItemsService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
