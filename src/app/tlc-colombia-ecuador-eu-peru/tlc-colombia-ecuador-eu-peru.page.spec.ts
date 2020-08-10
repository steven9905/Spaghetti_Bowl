import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLCColombiaEcuadorEUPeruPage } from './tlc-colombia-ecuador-eu-peru.page';

describe('TLCColombiaEcuadorEUPeruPage', () => {
  let component: TLCColombiaEcuadorEUPeruPage;
  let fixture: ComponentFixture<TLCColombiaEcuadorEUPeruPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLCColombiaEcuadorEUPeruPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLCColombiaEcuadorEUPeruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
