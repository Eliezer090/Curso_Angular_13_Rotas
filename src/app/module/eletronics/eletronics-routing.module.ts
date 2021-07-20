import { EletronicListComponent } from 'src/app/eletronics/eletronic-list/eletronic-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@Angular/router';
import { EletronicDetailComponent } from 'src/app/eletronics/eletronic-list/eletronic-detail/eletronic-detail.component';

const routes: Routes = [
  {path:'eletronics', component: EletronicListComponent},
  {path:'eletronics/:index', component: EletronicDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EletronicsRoutingModule { }
