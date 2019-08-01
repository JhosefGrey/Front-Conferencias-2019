import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConferenciasComponent } from './components/conferencias/conferencias.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomelogComponent } from './components/homelog/homelog.component';
import { SedeComponent } from './components/sede/sede.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'homeU', component: HomelogComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegistroComponent},
  {path:'conferencias', component: ConferenciasComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'historia', component: SedeComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
