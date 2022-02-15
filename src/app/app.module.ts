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
import { WebcomicFichaComponent } from './webcomic-ficha/webcomic-ficha.component';
import { webcomicNgComponent } from './webcomic-ng/webcomic-ng.component';

import { filtrarPipe } from './filtrar-cerca/filtrar-cerca.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    Menu_encaminamentComponent,
    CercaComponent,
    PreferitsComponent,
    WebcomicFichaComponent,
    webcomicNgComponent,
    filtrarPipe,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [Menu_encaminamentComponent]
})
export class AppModule { }
