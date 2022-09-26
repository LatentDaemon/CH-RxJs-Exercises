import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallBasedOnCallComponent } from './call-based-on-call/call-based-on-call.component';

const routes: Routes = [
  {
    path: 'exercise/:id',
    component: CallBasedOnCallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
