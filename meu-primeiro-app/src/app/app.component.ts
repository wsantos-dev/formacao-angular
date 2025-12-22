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
    <app-title *ngIf="destruir"></app-title>
    <br>

    <button (click)="destruirComponent()">Destruir Componente</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {
  

  public valor:number = 1;
  public destruir: boolean = true;

  constructor(){

  }

  public adicionar(): void{
    this.valor += 1;
  }

  public destruirComponent(): void {
    debugger
    this.destruir = false;
  }

  ngOnInit(): void {
    setTimeout(
      () => {
        console.log('Testando o ngOnInit()')
      }
      , 5000);
  }
  
  ngDoCheck(): void {
    debugger
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    debugger
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    debugger
    console.log('AfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }
  ngAfterViewChecked(): void {
    debugger
    console.log('AfterViewChecked')
  }

  
}
