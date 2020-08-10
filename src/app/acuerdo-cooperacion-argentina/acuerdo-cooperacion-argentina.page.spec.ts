import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoCooperacionArgentinaPage } from './acuerdo-cooperacion-argentina.page';

describe('AcuerdoCooperacionArgentinaPage', () => {
  let component: AcuerdoCooperacionArgentinaPage;
  let fixture: ComponentFixture<AcuerdoCooperacionArgentinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoCooperacionArgentinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoCooperacionArgentinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
