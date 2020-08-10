import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoParcialArgentinaPage } from './acuerdo-parcial-argentina.page';

describe('AcuerdoParcialArgentinaPage', () => {
  let component: AcuerdoParcialArgentinaPage;
  let fixture: ComponentFixture<AcuerdoParcialArgentinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoParcialArgentinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoParcialArgentinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
