import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDocsPage } from './view-docs.page';

describe('ViewDocsPage', () => {
  let component: ViewDocsPage;
  let fixture: ComponentFixture<ViewDocsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
