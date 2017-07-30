import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MAIN} from '../main/main.component';
import {IOT} from '../iot/iot.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
   { path: 'main',  component: MAIN },
   { path: 'iot',  component: IOT }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
