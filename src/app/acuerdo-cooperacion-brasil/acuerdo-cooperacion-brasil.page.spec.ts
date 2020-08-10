import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoCooperacionBrasilPage } from './acuerdo-cooperacion-brasil.page';

describe('AcuerdoCooperacionBrasilPage', () => {
  let component: AcuerdoCooperacionBrasilPage;
  let fixture: ComponentFixture<AcuerdoCooperacionBrasilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoCooperacionBrasilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoCooperacionBrasilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
