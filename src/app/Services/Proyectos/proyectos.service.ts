import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {ProyectoModel} from "../Models/ProyectoModel";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EstadoProyecto} from "../Models/EstadoProyecto";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private urlBase= environment.apiUrl;


  constructor(private http: HttpClient) { }

  //Obtener todos los proyectos
  getAllProjects(): Observable<ProyectoModel[]> {
    return of(this.proyectos);
  }
  getAllProjectsFinalizados(): Observable<ProyectoModel[]> {
    return of(this.proyectos.filter(proyecto => proyecto.estado == EstadoProyecto.FINALIZADO));
  }

  getAllProjectsByName(name: String) : Observable<ProyectoModel[]>{
    return of(this.proyectos.filter((proyecto) =>
      proyecto.titulo.toLowerCase().includes(name.toLowerCase())));
  }

  private  proyectos: ProyectoModel[] = [
    {
      id: 1,
      titulo: 'PLDev - Portfolio Profesional',
      descripcion: 'Página web es mi página donde muestro mis proyectos, experiencia laboral y varios hobbies.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.EN_PROCESO,
      tecnologias: ['Angular',],
      tags: ['Perfil Profesional', 'Portfolio', 'Personal'],
    }
  ];
}
