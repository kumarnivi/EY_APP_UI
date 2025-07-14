import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerViewComponent } from './manager-view.component';

describe('MangerViewComponent', () => {
  let component: MangerViewComponent;
  let fixture: ComponentFixture<MangerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangerViewComponent]
    });
    fixture = TestBed.createComponent(MangerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
