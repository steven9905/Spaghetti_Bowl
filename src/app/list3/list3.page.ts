import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.page.html',
  styleUrls: ['./list3.page.scss'],
})
export class List3Page implements OnInit {

  public lista: Array<any> = [
    {
      titulo:"Alianza del Pacífico",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-integracion-alianza-pacifico"
    },
    {
      titulo:"Comunidad Andina de Naciones (Acuerdo de Cartagena)",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-integracion-comunidad-andina"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
