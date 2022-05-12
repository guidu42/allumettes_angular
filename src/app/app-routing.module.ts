import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReglesComponent} from "./regles/regles.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'regles', component: ReglesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
