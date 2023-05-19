import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'', component:EmpComponent},
  {path:'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
