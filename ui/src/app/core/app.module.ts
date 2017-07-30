import { NgModule  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MAIN} from '../main/main.component';
import {IOT} from '../iot/iot.component';
import {NAVBAR} from '../navigation/nav.component'
import {HOME} from '../home/home.component';
import {WORKEX} from '../workex/workex.component';
import {ABOUT} from '../about/about.component';
import {AccordionModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  imports: [
  AppRoutingModule,BrowserModule,AccordionModule,BrowserAnimationsModule
  ],
  declarations: [
     MAIN, IOT, NAVBAR, HOME,WORKEX, ABOUT
  ],
  providers: [ ],
  bootstrap: [ HOME ]
})
export class AppModule { }
