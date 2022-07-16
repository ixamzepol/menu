import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';



const routes: Routes = [ 
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new', component: NewComponent},
  {path: 'edit', component: EditComponent},

];

  /*{path:'', component:LoginComponent  },
  //{path:'**', pathMatch:'full', redirectTo:'home'  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component : LoginComponent  },
  {path:"menu", 
      component : MenuComponent,
      children: MENU_ROUTES,
      canActivate: [LoginGuard
      
      ]
  },*/
//{path:'**', pathMatch:'full', redirectTo:'login'  }
  


@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NewComponent, EditComponent] //buena practica