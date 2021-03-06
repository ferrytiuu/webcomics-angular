import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { CercaComponent } from './cerca/cerca.component';
import { PreferitsComponent } from './preferits/preferits.component';
import {WebcomicPreviewComponent} from "./webcomic-preview/webcomic-preview.component";
import {EstadistiquesComponent} from "./estadistiques/estadistiques.component";

const routes: Routes = [
  { path: '', redirectTo: '/inici', pathMatch: 'full' },
  { path: 'inici', component: IniciComponent },
  { path: 'webcomic', component: WebcomicPreviewComponent },
  { path: 'cerca', component: CercaComponent },
  { path: 'preferits', component: PreferitsComponent },
  { path: 'estadistiques', component: EstadistiquesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

