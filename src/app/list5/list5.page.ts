import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list5',
  templateUrl: './list5.page.html',
  styleUrls: ['./list5.page.scss'],
})
export class List5Page implements OnInit {
 
  public lista: Array<any> = [
    {
      titulo:"Acuerdo de Cooperacion Colombia - Argentina",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-cooperacion-argentina"
    },
    {
      titulo:"Acuerdo de Cooperacion Colombia - Brasil",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-cooperacion-brasil"
    },
    {
      titulo:"Acuerdo de Cooperacion Colombia - Uruguay",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-cooperacion-uruguay"
    },
    {
      titulo:"Acuerdo de Cooperacion Colombia - Paraguay",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-cooperacion-paraguay"
    }
  ]
 
  constructor() { }

  ngOnInit() {
  }

}
