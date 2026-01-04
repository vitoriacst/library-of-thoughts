import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Create } from './components/thinkings/create/create';
import { Home } from './home/home';
import { List } from './components/thinkings/list/list';

@NgModule({
  declarations: [
    App,
    Home,
    Header,
    Footer,
    Create,
    List
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
