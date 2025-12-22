import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit , OnChanges, OnDestroy{

  @Input() 
  public title: string = 'Bem vindo!';

  constructor() { }
  ngOnDestroy(): void {
    console.log('Componente destruído');
  }

  ngOnInit(): void {
  
  }
  ngOnChanges(): void {
    console.log('title foi alterado com sucesso.')
  }
  

}
