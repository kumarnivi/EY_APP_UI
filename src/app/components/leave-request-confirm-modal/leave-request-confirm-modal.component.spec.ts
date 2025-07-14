import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestConfirmModalComponent } from './leave-request-confirm-modal.component';

describe('LeaveRequestConfirmModalComponent', () => {
  let component: LeaveRequestConfirmModalComponent;
  let fixture: ComponentFixture<LeaveRequestConfirmModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveRequestConfirmModalComponent]
    });
    fixture = TestBed.createComponent(LeaveRequestConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
