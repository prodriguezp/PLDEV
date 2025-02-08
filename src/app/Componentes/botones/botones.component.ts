import {Component, Input} from '@angular/core';
import {TipoButton} from "../../Enums/TipoButton";
import {NgIf, NgSwitch} from "@angular/common";

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  standalone: true,
  imports: [
    NgSwitch,
    NgIf
  ],
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  @Input() tipoBoton?: TipoButton;
  @Input() action? : () => void;

  protected readonly TipoButton = TipoButton;

  click(){
    console.log("aaaaaaaa")
    if (this.action) {
      this.action();
    }  }
}
