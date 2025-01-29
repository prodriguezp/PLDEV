import {Component} from '@angular/core';
import {ProyectosService} from "../../Services/Proyectos/proyectos.service";
import {ProyectoModel} from "../../Services/Models/ProyectoModel";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppModule} from "../../app.module";
import {ProyectoCardComponent} from "../../Componentes/proyecto-card/proyecto-card.component";

@Component({
  selector: 'app-ProyectosPage',
  templateUrl: './ProyectosPage.component.html',
  styleUrls: ['./ProyectosPage.component.scss'],
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    ProyectoCardComponent
  ],
  standalone: true
})
export class ProyectosPageComponent {
  protected proyectos: ProyectoModel[] = [];
  protected mostrarBusqueda = false;

  constructor(private _proyectosService: ProyectosService ) {
    console.log("Entreamos en el constructor")
  }

  ngOnInit() {
    this._proyectosService.getAllProjects().subscribe(
      proyectos => this.proyectos = proyectos
    )
  }

  sgetEmoji(estado: string): String{
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

  buscarProyectos(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this._proyectosService.getAllProjectsByName(this.mostrarBusqueda ? inputElement.value : '').subscribe(
      proyectos => {
        console.log("Lista Original: "+JSON.stringify(this.proyectos));
        console.log("Lista API: "+JSON.stringify(proyectos));
        console.log("Son iguales?: "+this.arraysAreEqual(proyectos,this.proyectos));
        if(!this.arraysAreEqual(proyectos, this.proyectos)) {
          this.proyectos = proyectos;
        }
      }
    );
    console.log("Entra en buscarProyectos");
  }

  mostrarEsconderBusqueda(estado: boolean){
    this.mostrarBusqueda = estado;
  }

  private arraysAreEqual(arr1: any[], arr2: any[]): boolean {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }


}
