import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'nosotros',
        component:NosotrosComponent
    },
    {
        path:'contacto',
        component:ContactoComponent
    },
    {
        path:'servicios',
        component:ServiciosComponent
    },
    {
        path:'formulario',
        component:FormularioComponent
    },
    {
        path:'**',
        component:Pagina404Component
    },

    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
];
