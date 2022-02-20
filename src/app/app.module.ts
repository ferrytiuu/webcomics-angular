import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IniciComponent} from './inici/inici.component';

import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { Menu_encaminamentComponent } from './menu/menu.component';
import { CercaComponent } from './cerca/cerca.component';
import { PreferitsComponent } from './preferits/preferits.component';
import { WebcomicPreviewComponent } from './webcomic-preview/webcomic-preview.component';
import { webcomicNgComponent } from './webcomic-ng/webcomic-ng.component';

import { filtrarPipe } from './filtrar-cerca/filtrar-cerca.component';
import { FormsModule } from '@angular/forms';
import { WebcomicCardComponent } from './webcomic-card/webcomic-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimacionsComponent } from './animacions/animacions.component';

import {NgxWebstorageModule} from 'ngx-webstorage';
import {NgxIndexedDBModule} from "ngx-indexed-db";
import {CONFIG} from "../DB/db";
import { EstadistiquesComponent } from './estadistiques/estadistiques.component';
import { OrdenarTaulaPipe } from './ordenar-taula.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    Menu_encaminamentComponent,
    CercaComponent,
    PreferitsComponent,
    WebcomicPreviewComponent,
    webcomicNgComponent,
    filtrarPipe,
    WebcomicCardComponent,
    AnimacionsComponent,
    EstadistiquesComponent,
    OrdenarTaulaPipe,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    NgxIndexedDBModule.forRoot(CONFIG),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [Menu_encaminamentComponent]
})
export class AppModule { }
