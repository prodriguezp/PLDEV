import {Component} from '@angular/core';
import {DatosInicioService} from "../../Services/DatosInicio/datos-inicio.service";
import {HomePage} from "../../Services/Models/DatosInicio";
import {NgForOf, ViewportScroller} from "@angular/common";
import {Router} from "@angular/router";
import {ProyectosPageComponent} from "../ProyectosPage/ProyectosPage.component";
import {AppModule} from "../../app.module";
import {TipoButton} from "../../Enums/TipoButton";
import {BotonesComponent} from "../../Componentes/botones/botones.component";

@Component({
  selector: 'app-InicioPage',
  templateUrl: './InicioPage.component.html',
  styleUrls: ['./InicioPage.component.scss'],
  imports: [
    NgForOf,
    ProyectosPageComponent,
    BotonesComponent,
  ],
  standalone: true
})
export class InicioPageComponent {
  public datosInicio: HomePage|null = null;
  protected readonly JSON = JSON;

  constructor(private datosInicioService: DatosInicioService,
              private router: Router,
              private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.datosInicioService.getDatosInicio().subscribe(
      data =>  {
        this.datosInicio = data;
      }
    )
  }

  goToProyectos(){
    this.viewportScroller.scrollToPosition([0,0])
    this.router.navigate(['proyectos']);
  }

  goToContacto(){
    this.viewportScroller.scrollToPosition([0,0])
    this.router.navigate(['contacto']);
  }

  protected readonly TipoButton = TipoButton;
}
