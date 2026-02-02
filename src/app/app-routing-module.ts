import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Create } from './components/thinkings/create/create';
import { Delete } from './components/thinkings/delete/delete';
import { List } from './components/thinkings/list/list';
import { Update } from './components/thinkings/update/update';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'create',
    component: Create,
  },
  {
    path: 'list',
    component: List,
  },
  {
    path: 'thinkings/delete/:id',
    component: Delete,
  },
  {
    path: 'thinkings/update/:id',
    component: Update,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
