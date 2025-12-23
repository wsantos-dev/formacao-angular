import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {


  public condition: boolean = true;
  public conditionClick: boolean = true;
  public fruta: string =  ''
  
  public list: Array<{nome: string, idade:number}> = [
    {nome: 'João da Silva', idade: 30},
    {nome: 'Francisco Fernando', idade: 22},
    {nome: 'Gustavo Falcão', idade: 38},
    {nome: 'Roberta Karla', idade: 45},
    {nome: 'Silvia Victor', idade: 34},
    {nome: 'Bruna Jéssica', idade: 24}
  ]

  constructor() { }

  ngOnInit(): void {
     
     setInterval(() => {
        if (this.condition){
          this.condition = false
        }
        else {
          this.condition = true
        }

     }, 2000)
  }

  public exibir(){
    setInterval(() => {
        if (this.condition){
          this.conditionClick = false
        }
        else {
          this.conditionClick = true
        }

     }, 2000)
  }

  onClickAddList() {
    this.list.push({nome: "Drih", idade: 33})
  }

  onClickEventList(event: number){
    this.list.splice(event, 1)
  }
}
