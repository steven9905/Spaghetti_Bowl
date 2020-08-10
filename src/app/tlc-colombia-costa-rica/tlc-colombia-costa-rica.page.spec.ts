import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLCColombiaCostaRicaPage } from './tlc-colombia-costa-rica.page';

describe('TLCColombiaCostaRicaPage', () => {
  let component: TLCColombiaCostaRicaPage;
  let fixture: ComponentFixture<TLCColombiaCostaRicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLCColombiaCostaRicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLCColombiaCostaRicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
