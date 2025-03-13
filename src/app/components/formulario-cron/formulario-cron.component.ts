import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contrato, ContratoService } from '../../service/contrato.service';
import { Cliente, ClienteService } from '../../service/cliente.service';
import { Prestaciones, PrestacionesService } from '../../service/prestaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-cron',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-cron.component.html',
  styleUrl: './formulario-cron.component.css'
})
export class FormularioCronComponent {
 

  contrato: Contrato = {
    nombreContrato: '',
    fechaInicio: new Date(),
    fechaFin: new Date(),
    estado: '',
    cliente: {} as Cliente,
    prestaciones: [],
  };

  clientes: Cliente[] = [];
  prestaciones: Prestaciones[] = [];

  constructor(
    private servicio: ContratoService,
    private servicioCliente: ClienteService,
    private servicioPrestaciones: PrestacionesService,
    private route:Router

  ) {}

  ngOnInit(): void {
    this.cargarClientes();
    this.cargarPrestaciones();
  }

  cargarClientes(): void {
    this.servicioCliente.getClientes().subscribe({
      next: (clientes) => {
        console.log('Clientes cargados:', clientes); // Agrega esto para verificar los datos
        this.clientes = clientes;
      },
      error: (error) => console.error('Error al cargar clientes:', error),
    });
  }
  
  cargarPrestaciones(): void {
    this.servicioPrestaciones.getPrestaciones().subscribe({
      next: (prestaciones) => {
        console.log('Prestaciones cargadas:', prestaciones); // Agrega esto para verificar los datos
        this.prestaciones = prestaciones;
      },
      error: (error) => console.error('Error al cargar prestaciones:', error),
    });
  }

  guardarCon(): void {
    this.servicio.guardarContrato(this.contrato).subscribe({
      next: (response) => {
        console.log('Contrato guardado:', response);
        alert('Contrato guardado exitosamente');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al guardar el contrato:', error);
        alert('Hubo un error al guardar el contrato');
      },
    });
  }

  resetForm(): void {
    this.contrato = {
      nombreContrato: '',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      estado: '',
      cliente: {} as Cliente,
      prestaciones: [],
    };
  }

    
  logout() {
    localStorage.setItem('login', 'false');
    this.route.navigate(['home']);
  }
}

