import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PorfolioComponent } from './porfolio/porfolio.component';

const routes: Routes = [
  {path: 'porfolio', component:PorfolioComponent},
  {path: 'iniciar-sesion', component:InicioSesionComponent},
  {path: '', redirectTo: 'iniciar-sesion', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
