import { Component } from '@angular/core';
import { FormularioCComponent } from "../../components/formulario-c/formulario-c.component";
import { FormularioContratoComponent } from "../formulario-contrato/formulario-contrato.component";
import { FormularioCronComponent } from "../../components/formulario-cron/formulario-cron.component";

@Component({
  selector: 'app-contrato',
  standalone: true,
  imports: [ FormularioCronComponent],
  templateUrl: './contrato.component.html',
  styleUrl: './contrato.component.css'
})
export class ContratoComponent {

}
