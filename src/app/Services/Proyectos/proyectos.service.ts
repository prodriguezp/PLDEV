import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {ProyectoModel} from "../Models/ProyectoModel";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private urlBase= environment.apiUrl;


  constructor(private http: HttpClient) { }

  //Obtener todos los proyectos
  getAllProjects(): Observable<ProyectoModel[]> {
    return this.http.get<ProyectoModel[]>(this.urlBase+'/proyectos/all');
  }

  getAllProjectsByName(name: String) : Observable<ProyectoModel[]>{
    return this.http.get<ProyectoModel[]>(this.urlBase+'/proyectos/byName?name='+name);
  }
}
