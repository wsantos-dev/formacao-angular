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
   <app-diretivas-atributos>
    <h1>Aulas de Diretivas de Atributo</h1>
    <hr>
   </app-diretivas-atributos>
   <app-diretivas-atributos>
    <h1>Aulas Final</h1>
    <h3>Santos</h3>
   </app-diretivas-atributos>
   <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
   <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  ngOnInit(): void {}
  
}
