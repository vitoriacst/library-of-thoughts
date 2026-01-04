import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Create } from './components/thinkings/create/create';
import { List } from './components/thinkings/list/list';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'list'
  },
  {
    path: 'create',
    component: Create
  },
  {
    path: 'list',
    component: List
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
