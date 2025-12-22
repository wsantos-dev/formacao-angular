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
  constructor() { }

  ngOnInit(): void {
  }

}
