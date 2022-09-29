import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SocialesComponent } from './header/sociales/sociales.component';
import { LogopComponent } from './header/logop/logop.component';
import { FondoComponent } from './header/fondo/fondo.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ExpComponent } from './exp/exp.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './skills/skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './exp/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './exp/edit-experiencia/edit-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialesComponent,
    LogopComponent,
    FondoComponent,
    SobremiComponent,
    ExpComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
