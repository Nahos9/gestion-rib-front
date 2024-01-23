import { Routes } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientRibComponent } from './add-client-rib/add-client-rib.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent,children:[
        {path:'list',component:ListClientComponent},
        {path:'add',component:AddClientRibComponent},
    ]},
];
