import {Component, Input} from '@angular/core';
import {ProyectoModel} from "../../Services/Models/ProyectoModel";
import {NgForOf} from "@angular/common";
import {BotonesComponent} from "../botones/botones.component";
import {TipoButton} from "../../Enums/TipoButton";

@Component({
  selector: 'app-proyecto-card',
  templateUrl: './proyecto-card.component.html',
  standalone: true,
  imports: [
    NgForOf,
    BotonesComponent
  ],
  styleUrl: './proyecto-card.component.scss'
})
export class ProyectoCardComponent {

  @Input() proyecto! : ProyectoModel;
  protected readonly TipoButton = TipoButton;
}
