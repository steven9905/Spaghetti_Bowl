import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoParcialPage } from './acuerdo-parcial.page';

describe('AcuerdoParcialPage', () => {
  let component: AcuerdoParcialPage;
  let fixture: ComponentFixture<AcuerdoParcialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoParcialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoParcialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
