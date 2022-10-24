import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditestudiosComponent } from './estudios/editestudios/editestudios.component';
import { NewestudioComponent } from './estudios/newestudio/newestudio.component';
import { EditExperienciaComponent } from './exp/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './exp/new-experiencia/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewestudioComponent},
  {path: 'editedu/:id', component: EditestudiosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
