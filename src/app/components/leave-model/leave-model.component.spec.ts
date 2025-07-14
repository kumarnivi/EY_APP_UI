import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveModelComponent } from './leave-model.component';

describe('LeaveModelComponent', () => {
  let component: LeaveModelComponent;
  let fixture: ComponentFixture<LeaveModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveModelComponent]
    });
    fixture = TestBed.createComponent(LeaveModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
