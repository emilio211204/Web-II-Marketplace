import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  menuAbierto: boolean = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
  cerrarMenu() {
    this.menuAbierto = false;
  }

  autenticado(): boolean {
    if (localStorage.getItem('login') === 'true') {
      return true;
    } else {
      return false;
    }
  }

}
