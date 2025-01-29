import {Component, Input} from '@angular/core';
import {ProyectoModel} from "../../Services/Models/ProyectoModel";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-proyecto-card',
  templateUrl: './proyecto-card.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrl: './proyecto-card.component.scss'
})
export class ProyectoCardComponent {

  @Input() proyecto! : ProyectoModel;
}
