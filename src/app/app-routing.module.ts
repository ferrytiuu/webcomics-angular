import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { M11_EncaminamentComponent } from './menu/menu';
import { IniciComponent } from './inici/inici.component';


const routes: Routes = [
  { path: '', redirectTo: '/inici', pathMatch: 'full' },
  { path: 'inici', component: IniciComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
