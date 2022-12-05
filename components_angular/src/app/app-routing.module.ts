import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonCounterComponent } from './components/button-counter/button-counter.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import { HelloCardComponent } from './components/hello-card/hello-card.component';

const routes: Routes = [
  { path: 'counter', component: ButtonCounterComponent },
  { path: 'users', component: GetUserComponent },
  { path: 'card', component: HelloCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
