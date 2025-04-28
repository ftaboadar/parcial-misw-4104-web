import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: 'list',
        component: VehicleListComponent,
      },
];
