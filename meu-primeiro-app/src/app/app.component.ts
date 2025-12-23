import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

/**
 * DoCheck,
 * AfterContentInit,
 * AfterContentChecked,
 * AfterViewInit,
 * AfterViewChecked
 */

@Component({
  selector: 'app-root',
  template: `
   <app-diretivas-atributos></app-diretivas-atributos>
   <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
   <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  ngOnInit(): void {}
  
}
