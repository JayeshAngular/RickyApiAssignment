import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TablelistComponent } from './tablelist/tablelist.component';

const routes: Routes = [
  {path:"Search",component:SearchBoxComponent},
  {path:"TableList",component:TablelistComponent},
  {path:"",redirectTo:"/Search",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
