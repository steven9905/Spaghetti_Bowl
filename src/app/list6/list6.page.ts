import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list6',
  templateUrl: './list6.page.html',
  styleUrls: ['./list6.page.scss'],
})
export class List6Page implements OnInit {

  public lista: Array<any> = [
    {
      titulo:"Acuerdo de Alcance Parcial Colombia - Argentina",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-parcial-argentina"
    },
    {
      titulo:"Acuerdo de Alcance Parcial Colombia - Brasil",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-parcial-brasil"
    },
    {
      titulo:"Acuerdo de Alcance Parcial Colombia - Cuba",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-parcial-cuba"
    },
    {
      titulo:"Acuerdo de Alcance Parcial Colombia - Paraguay",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-parcial-paraguay"
    },
    {
      titulo:"Acuerdo de Alcance Parcial Colombia - Uruguay",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-parcial-uruguay"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
