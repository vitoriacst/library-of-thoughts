import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Card } from './components/thinkings/card/card';
import { Create } from './components/thinkings/create/create';
import { List } from './components/thinkings/list/list';
import { Home } from './home/home';
import { Delete } from './components/thinkings/delete/delete';
import { Update } from './components/thinkings/update/update';

@NgModule({
  declarations: [App, Home, Header, Footer, Create, List, Card, Delete, Update],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
