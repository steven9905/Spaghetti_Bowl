import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoDeCooperacionPage } from './acuerdo-de-cooperacion.page';

describe('AcuerdoDeCooperacionPage', () => {
  let component: AcuerdoDeCooperacionPage;
  let fixture: ComponentFixture<AcuerdoDeCooperacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoDeCooperacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoDeCooperacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
