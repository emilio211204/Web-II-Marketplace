import { Component } from '@angular/core';
import { FormularioReseComponent } from "../../components/formulario-rese/formulario-rese.component";

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [FormularioReseComponent],
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.css'
})
export class ResenasComponent {

}
