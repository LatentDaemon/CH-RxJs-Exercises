import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallBasedOnCallChildComponent } from './call-based-on-call/call-based-on-call-child/call-based-on-call-child.component';
import { CallBasedOnCallComponent } from './call-based-on-call/call-based-on-call.component';

const routes: Routes = [
  {
    path: 'exercise1',
    component: CallBasedOnCallComponent,
    children: [
      {
        path: ':id',
        component: CallBasedOnCallChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
