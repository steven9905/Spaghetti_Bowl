import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLCColombiaRepublicaDeCoreaPage } from './tlc-colombia-republica-de-corea.page';

describe('TLCColombiaRepublicaDeCoreaPage', () => {
  let component: TLCColombiaRepublicaDeCoreaPage;
  let fixture: ComponentFixture<TLCColombiaRepublicaDeCoreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLCColombiaRepublicaDeCoreaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLCColombiaRepublicaDeCoreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
