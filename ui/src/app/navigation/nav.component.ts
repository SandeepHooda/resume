import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
 selector : 'nav-bar', 
  templateUrl: './nav.component.html',
  encapsulation: ViewEncapsulation.None 
})

export class NAVBAR  {
    constructor() { }

     private menuClick(){
          let drawer = document.querySelector('.nav');
          drawer.classList.toggle('open');
        
      }
     

}