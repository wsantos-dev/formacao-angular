import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {


  public nome: string = 'Wellington'
  public idade: number = 40
  public maisUm:number = 1

  public checkedDisable: boolean = false
  public imgSrc: string = '/assets/angular-icon.svg'
  public imgTitle: string = 'Property Biding Angular'
  
  public position: { x: number, y: number } = { x: 0, y: 0}


  public alertaInfo(valor: MouseEvent) {
    console.log(valor)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
