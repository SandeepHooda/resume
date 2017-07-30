import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MAIN} from '../main/main.component';
import {IOT} from '../iot/iot.component';
import {CONTACT} from '../contact/contact.component';
import {ABOUT} from '../about/about.component'
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
   { path: 'main',  component: MAIN },
   { path: 'iot',  component: IOT },
   { path: 'contact',  component: CONTACT },
   { path: 'about',  component: ABOUT }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
