import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent} from "./create-user/create-user.component";
import { ReadUserComponent } from "./read-user/read-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";

const routes: Routes = [
 {
   path : 'create-user',
   component : CreateUserComponent
 },
 {
  path : '',
  component : ReadUserComponent
},
{
  path : 'update-user/:email',
  component : UpdateUserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
