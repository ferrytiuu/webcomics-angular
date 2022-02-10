import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { CercaComponent } from './cerca/cerca.component';
import { PreferitsComponent } from './preferits/preferits.component';
import {WebcomicFichaComponent} from "./webcomic-ficha/webcomic-ficha.component";


const routes: Routes = [
  { path: '', redirectTo: '/inici', pathMatch: 'full' },
  { path: 'inici', component: IniciComponent },
  { path: 'webcomic', component: WebcomicFichaComponent },
  { path: 'cerca', component: CercaComponent },
  { path: 'preferits', component: PreferitsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

