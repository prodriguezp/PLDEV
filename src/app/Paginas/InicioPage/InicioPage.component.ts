import {Component} from '@angular/core';
import {DatosInicioService} from "../../Services/DatosInicio/datos-inicio.service";
import {HomePage} from "../../Services/Models/DatosInicio";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-InicioPage',
  templateUrl: './InicioPage.component.html',
  styleUrls: ['./InicioPage.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class InicioPageComponent {
  public datosInicio: HomePage|null = null;
  protected readonly JSON = JSON;

  constructor(private datosInicioService: DatosInicioService) {}

  ngOnInit() {
    this.datosInicioService.getDatosInicio().subscribe(
      data => this.datosInicio = data
    )
  }

}
