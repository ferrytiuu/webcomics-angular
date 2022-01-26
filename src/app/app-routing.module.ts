import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { CercaComponent } from './cerca/cerca.component';


const routes: Routes = [
  { path: '', redirectTo: '/inici', pathMatch: 'full' },
  { path: 'inici', component: IniciComponent },
  { path: 'cerca', component: CercaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

