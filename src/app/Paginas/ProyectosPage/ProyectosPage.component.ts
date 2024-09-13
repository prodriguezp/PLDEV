import {Component} from '@angular/core';
import {ProyectosService} from "../../Services/Proyectos/proyectos.service";
import {ProyectoModel} from "../../Services/Models/ProyectoModel";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ProyectosPage',
  templateUrl: './ProyectosPage.component.html',
  styleUrls: ['./ProyectosPage.component.css'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class ProyectosPageComponent {
  protected proyectos: ProyectoModel[] = [];

  constructor(private _proyectosService: ProyectosService ) {

  }

  ngOnInit() {
    this._proyectosService.getAllProjects().subscribe(
      proyectos => this.proyectos = proyectos
    )
  }


  getEmoji(estado: string): String{
    switch (estado) {
      case "FINALIZADO":
        return "✅";
      case "EN_PROCESO":
        return "👨🏻‍💻";
      case "SIN_EMPEZAR":
        return "🤨";
      default:
        return "";
    }
  }
}
