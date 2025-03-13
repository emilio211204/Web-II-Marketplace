import { Component } from '@angular/core';
import { ServiciosService } from '../../service/servicios.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Servicio {
  id: string;
  nombre: string;
  email: string;
  profesion: string;
  telefono: string;
  direccion: string;
  imagen: string;
  showDetails?: boolean;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  servicios: Servicio[] = [];
  serviciosFiltrados: Servicio[] = [];
  profesionBuscada: string = '';

  constructor(private servicio: ServiciosService, private route: Router) { }
  
  ngOnInit() {
    this.cargarServicios();
  }

  cargarServicios() {
    this.servicio.getServicios().subscribe({
      next: (data) => {
        // Asegurarse de que los datos sean un array
        this.servicios = Array.isArray(data) ? data : [];
        this.serviciosFiltrados = [...this.servicios];
        console.log('Servicios cargados:', this.servicios);
      },
      error: (error) => {
        console.error('Error al cargar servicios:', error);
      }
    });
  }

  toggleDetails(servicio: Servicio) {
    servicio.showDetails = !servicio.showDetails;
  }

  // Función para normalizar texto (eliminar acentos y convertir a minúsculas)
  normalizarTexto(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  filtrarPorProfesion() {
    console.log('Filtrando por profesión:', this.profesionBuscada);
    
    if (!this.profesionBuscada || this.profesionBuscada.trim() === '') {
      this.serviciosFiltrados = [...this.servicios];
      return;
    }

    const terminoBusqueda = this.normalizarTexto(this.profesionBuscada.trim()); // Normaliza el término de búsqueda
    this.serviciosFiltrados = this.servicios.filter(servicio => {
      if (!servicio.profesion) return false;
      return this.normalizarTexto(servicio.profesion).includes(terminoBusqueda); // Normaliza la profesión del servicio
    });
    
    console.log('Resultados filtrados:', this.serviciosFiltrados.length);

    // Limpiar el campo de entrada después de aplicar el filtro
    this.profesionBuscada = '';
  }

  logout() {
    localStorage.setItem('login', 'false');
    this.route.navigate(['login']);
  }
}
