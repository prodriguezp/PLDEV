import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HomePage} from "../Models/DatosInicio";

@Injectable({
  providedIn: 'root'
})
export class DatosInicioService {

  private urlBase= environment.apiUrl;

  constructor(private http: HttpClient) { }


  getDatosInicio(): Observable<HomePage> {
    return this.http.get<HomePage>(this.urlBase+'/inicio/json');
  }
}
