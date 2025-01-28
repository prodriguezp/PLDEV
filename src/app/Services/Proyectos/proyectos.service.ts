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
      titulo: 'Sistema de Gestión Escolar',
      descripcion: 'Aplicación para la gestión de estudiantes, profesores y clases.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.EN_PROCESO,
      tecnologias: ['Angular', 'TypeScript', 'Firebase'],
      tags: ['educación', 'gestión', 'web'],
    },
    {
      id: 2,
      titulo: 'E-commerce de Ropa',
      descripcion: 'Plataforma para la compra y venta de ropa en línea.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.FINALIZADO,
      tecnologias: ['React', 'Node.js', 'MongoDB'],
      tags: ['ecommerce', 'ropa', 'web'],
    },
    {
      id: 3,
      titulo: 'Sistema de Inventarios',
      descripcion: 'Aplicación para gestionar inventarios y stock de productos.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.EN_PROCESO,
      tecnologias: ['Vue.js', 'Django', 'PostgreSQL'],
      tags: ['inventario', 'gestión', 'web'],
    },
    {
      id: 4,
      titulo: 'App de Clima',
      descripcion: 'Aplicación móvil para consultar el clima en tiempo real.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.FINALIZADO,
      tecnologias: ['Flutter', 'Dart', 'OpenWeather API'],
      tags: ['clima', 'móvil', 'API'],
    },
    {
      id: 5,
      titulo: 'Blog Personal',
      descripcion: 'Plataforma para compartir artículos y publicaciones.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.EN_PROCESO,
      tecnologias: ['Next.js', 'TypeScript', 'Markdown'],
      tags: ['blog', 'personal', 'web'],
    },
    {
      id: 6,
      titulo: 'Gestión de Reservas',
      descripcion: 'Sistema para reservar salas y equipos en oficinas.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.FINALIZADO,
      tecnologias: ['Laravel', 'Vue.js', 'MySQL'],
      tags: ['reservas', 'oficinas', 'web'],
    },
    {
      id: 7,
      titulo: 'Chat en Tiempo Real',
      descripcion: 'Aplicación para comunicación en tiempo real.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.EN_PROCESO,
      tecnologias: ['Socket.io', 'Express.js', 'React'],
      tags: ['chat', 'real-time', 'web'],
    },
    {
      id: 8,
      titulo: 'Plataforma de Aprendizaje',
      descripcion: 'Sistema para la enseñanza en línea con cursos interactivos.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.FINALIZADO,
      tecnologias: ['Angular', 'Spring Boot', 'PostgreSQL'],
      tags: ['educación', 'cursos', 'web'],
    },
    {
      id: 9,
      titulo: 'Seguimiento de Hábitos',
      descripcion: 'Aplicación móvil para ayudar a formar y seguir hábitos.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.EN_PROCESO,
      tecnologias: ['React Native', 'Redux', 'SQLite'],
      tags: ['hábitos', 'salud', 'móvil'],
    },
    {
      id: 10,
      titulo: 'Portfolio Digital',
      descripcion: 'Página web personal para mostrar proyectos y experiencia.',
      img: 'https://via.placeholder.com/150',
      estado: EstadoProyecto.FINALIZADO,
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      tags: ['portfolio', 'personal', 'web'],
    },
  ];
}
