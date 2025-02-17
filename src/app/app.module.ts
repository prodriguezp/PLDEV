import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './Paginas/InicioPage/InicioPage.component';
import {ProyectosPageComponent} from "./Paginas/ProyectosPage/ProyectosPage.component";
import {SobreMiPageComponent} from "./Paginas/SobreMiPage/SobreMiPage.component";
import {ContactoComponent} from "./Paginas/Contacto/Contacto.component";
import {HeaderComponent} from "./Componentes/Header/Header.component";
import {FooterComponent} from "./Componentes/Footer/Footer.component";
import { ProyectoCardComponent } from './Componentes/proyecto-card/proyecto-card.component';
import {HttpClientModule} from "@angular/common/http";
import { BotonesComponent } from './Componentes/botones/botones.component';

const routes: Routes = [
  { path: '', component: InicioPageComponent },
  { path: 'inicio', component: InicioPageComponent},
  { path: 'proyectos', component: ProyectosPageComponent},
  { path: 'sobremi', component: SobreMiPageComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        InicioPageComponent,
        HeaderComponent,
        FooterComponent,
        ProyectoCardComponent,
        BotonesComponent,
        HttpClientModule
    ],
    providers: [],
  exports: [
    ProyectoCardComponent,
    BotonesComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
