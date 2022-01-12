import { Routes, RouterModule } from '@angular/router';
import { AComComponent } from './a-com.component';
const routes: Routes = [
  {
    path: '',
    component: AComComponent
  },
];
export const AComRoutingModule = RouterModule.forChild(routes);
