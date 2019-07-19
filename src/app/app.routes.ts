import { Routes } from '@angular/router';
import { UpcomingComponent } from './common/upcoming/app.component';
import { PopularComponent } from './common/popular/app.component';
import { DemoComponent } from './common/demo/app.component'; 

export const appRoutes: Routes = [
    {
      path: '', 
      component: UpcomingComponent,
      pathMatch:'full'
    },  
    {
      path: 'upcoming', 
      component: UpcomingComponent
    }, //新片
    {
      path: 'popular/series', 
      component: PopularComponent
    },//流行
    {
      path: 'demo', 
      component: DemoComponent
    },//demo   
]; 
