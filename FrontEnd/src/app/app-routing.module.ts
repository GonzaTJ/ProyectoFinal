import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './exp/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './exp/new-experiencia/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
