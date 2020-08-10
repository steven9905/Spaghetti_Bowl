import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List2Page } from './list2.page';

describe('List2Page', () => {
  let component: List2Page;
  let fixture: ComponentFixture<List2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
