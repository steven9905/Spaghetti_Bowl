import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLCColombiaChilePage } from './tlc-colombia-chile.page';

describe('TLCColombiaChilePage', () => {
  let component: TLCColombiaChilePage;
  let fixture: ComponentFixture<TLCColombiaChilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLCColombiaChilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLCColombiaChilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
