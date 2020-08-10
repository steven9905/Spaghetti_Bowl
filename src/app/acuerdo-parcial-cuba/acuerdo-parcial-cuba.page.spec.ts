import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoParcialCubaPage } from './acuerdo-parcial-cuba.page';

describe('AcuerdoParcialCubaPage', () => {
  let component: AcuerdoParcialCubaPage;
  let fixture: ComponentFixture<AcuerdoParcialCubaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoParcialCubaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoParcialCubaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
