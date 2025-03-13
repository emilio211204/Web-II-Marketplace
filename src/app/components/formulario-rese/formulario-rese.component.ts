import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Resena, ResenasService } from '../../service/resenas.service';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-formulario-rese',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-rese.component.html',
  styleUrl: './formulario-rese.component.css'
})
export class FormularioReseComponent {
  resena: Resena = {
    comentario: '',
    fechacomentario: new Date(),
    calificacion: 1,
    cliente:'' ,
    proveedor: ''
  };

  constructor(private resenaService: ResenasService ) {}

  // Método para enviar el formulario
  onSubmit(): void {
    this.resenaService.guardarResena(this.resena).subscribe(response => {
      console.log('Reseña creada:', response);
      this.resetForm(); // Limpiar el formulario después de enviar
    });
  }

  // Método para resetear el formulario
  resetForm(): void {
    this.resena = {
      comentario: '',
      fechacomentario: new Date(),
      calificacion: 1,
      cliente: '',
      proveedor: ''
    };
  }
}
