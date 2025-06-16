import { Routes } from '@angular/router';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form';
import { UserList } from './user-list/user-list';

export const routes: Routes = [
  {path: 'template-driven-form', component: TemplateDrivenForm},
  {path: 'user-list', component: UserList}
];
