import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { RegisterationformComponent } from './registerationform/registerationform.component';

const routes: Routes = [
  { path: 'DisplayComponent', component: DisplayComponent },
  { path: '', component: RegisterationformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
