import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoCooperacionParaguayPage } from './acuerdo-cooperacion-paraguay.page';

describe('AcuerdoCooperacionParaguayPage', () => {
  let component: AcuerdoCooperacionParaguayPage;
  let fixture: ComponentFixture<AcuerdoCooperacionParaguayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoCooperacionParaguayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoCooperacionParaguayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
