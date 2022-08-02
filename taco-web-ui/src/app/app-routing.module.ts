import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
	{ path: 'home',
      component: HomeComponent,
    },
    { path: 'design',
      component: DesignComponent,
    },    
    {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
