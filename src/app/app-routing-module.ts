import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subirfichero } from './components/subirfichero/subirfichero';

const routes: Routes = [
  { path: '', component: Subirfichero },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
