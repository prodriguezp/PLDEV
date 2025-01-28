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
        "title": "👨🏻‍💻 Desarrollador Fullstack con enfoque en Angular y Spring Boot 👨🏻‍💻",
        "subtitle": "4 años de experiencia en desarrollo web y backend escalable"
      },
      "introduction": {
        "paragraph": "Soy un desarrollador Fullstack con 4 años de experiencia en el uso de tecnologías como Angular y el ecosistema de Spring para crear soluciones web escalables. Mi enfoque principal es en el backend con Java, incluyendo Spring Boot, JPA, Spring Security y Spring Data, aunque también tengo experiencia en el desarrollo frontend con Angular. Me especializo en la creación de aplicaciones full stack robustas, priorizando la eficiencia y la escalabilidad."
      },
      "skills": {
        "title": "Habilidades Destacadas",
        "list": [
          {
            "text": "Desarrollo en Angular",
            "class": "fab fa-angular"
          },{
            "text": "Desarrollo Front/End Spring Boot",
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
