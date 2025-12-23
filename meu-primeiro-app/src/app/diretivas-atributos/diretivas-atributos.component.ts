import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = false
  public height: string = "20px"
  public width: string = '20px'
  public backgroundColor: string = 'tomato'

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor){
        this.valor = false
      } else {
        this.valor = true
      }
      if (this.height == '20px'){
        this.height = '50px'
        this.width = '200px'
        this.backgroundColor = 'royalblue'
      } else {
        this.height = '20px'
        this.width = '20px'
        this.backgroundColor = 'tomato';
      }
    }, 2000)
  }

}
