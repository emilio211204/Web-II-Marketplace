import { Component } from '@angular/core';
import { FormularioCComponent } from "../../components/formulario-c/formulario-c.component";

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [FormularioCComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

}
