import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List5Page } from './list5.page';

describe('List5Page', () => {
  let component: List5Page;
  let fixture: ComponentFixture<List5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
