
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PageEventsComponent } from './page-events/page-events.component';
import { PagePlansComponent } from './page-plans/page-plans.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { CreateEventComponent } from './create-event/create-event.component';
export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path: 'events', component: PageEventsComponent},
    {path:'plans', component: PagePlansComponent},
    {path: '', component: HomeComponent},

    {path: 'admin', component: PanelAdminComponent},
    {path: 'events/add', component: CreateEventComponent}
];
