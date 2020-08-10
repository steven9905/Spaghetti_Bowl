import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List3Page } from './list3.page';

describe('List3Page', () => {
  let component: List3Page;
  let fixture: ComponentFixture<List3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
