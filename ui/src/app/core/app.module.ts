import { NgModule  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MAIN} from '../main/main.component';
import {IOT} from '../iot/iot.component';
import {NAVBAR} from '../navigation/nav.component'
import {HOME} from '../home/home.component';
import {CONTACT} from '../contact/contact.component';
import {ABOUT} from '../about/about.component'
@NgModule({
  imports: [
  AppRoutingModule,BrowserModule
  ],
  declarations: [
     MAIN, IOT, NAVBAR, HOME,CONTACT, ABOUT
  ],
  providers: [ ],
  bootstrap: [ HOME ]
})
export class AppModule { }
