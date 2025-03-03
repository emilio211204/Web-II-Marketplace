import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarserComponent } from './pages/editarser/editarser.component';

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
        path:'agregar',
        component:AgregarComponent
    },
    {
        path:'editar/:id',
        component:EditarserComponent
    },
    {
        path:'**',
        component:Pagina404Component
    },

    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    }
];
