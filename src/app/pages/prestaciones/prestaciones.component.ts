import { Component } from '@angular/core';
import { FormularioPrestaComponent } from "../../components/formulario-presta/formulario-presta.component";

@Component({
  selector: 'app-prestaciones',
  standalone: true,
  imports: [FormularioPrestaComponent],
  templateUrl: './prestaciones.component.html',
  styleUrl: './prestaciones.component.css'
})
export class PrestacionesComponent {

}
