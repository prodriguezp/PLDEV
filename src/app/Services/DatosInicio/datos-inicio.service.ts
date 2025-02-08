import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {HomePage} from "../Models/DatosInicio";

@Injectable({
  providedIn: 'root'
})
export class DatosInicioService {

  private datos = {
    "home": {
      "header": {
        "title": "👨🏻‍💻 Desarrollador Fullstack | Experto en Angular & Spring Boot 👨🏻‍💻",
        "subtitle": "4 años de experiencia en desarrollo web y backend escalable"
      },
      "introduction": {
        "paragraph": "Soy un desarrollador Fullstack con 4 años de experiencia en la creación de soluciones web escalables. Me especializo en el desarrollo backend con Java, utilizando Spring Boot, JPA, Spring Security y Spring Data.Cuento con experiencia completa en proyectos Angular, desde su desarrollo inicial hasta su despliegue en producción, optimizando tanto el rendimiento como la arquitectura."
      },
      "skills": {
        "title": "Habilidades Destacadas",
        "list": [
          {
            "text": "Desarrollo en Angular",
            "class": "fab fa-angular"
          },{
            "text": "Desarrollo BackEnd Spring Boot",
            "class": "fa fa-leaf"
          },{
            "text": "Base de datos",
            "class": "fas fa-database"
          },{
            "text": "Servicios REST y SOAP",
            "class": "fa fa-cloud"
          },{
            "text": "Programación Java",
            "class": "fa fa-coffee"
          }
        ]
      },
      "cta": [
        {
          "text": "Ver mis Proyectos",
          "url": "/proyectos"
        },
        {
          "text": "Contáctame",
          "url": "/contacto"
        }
      ],
      "projects": {
        "title": "Proyectos Destacados",
        "list": []
      }
    }
  }

  getDatosInicio(): Observable<HomePage> {
    return of(this.datos);
  }
}
