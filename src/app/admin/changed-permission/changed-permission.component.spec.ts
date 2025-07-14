import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedPermissionComponent } from './changed-permission.component';

describe('ChangedPermissionComponent', () => {
  let component: ChangedPermissionComponent;
  let fixture: ComponentFixture<ChangedPermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangedPermissionComponent]
    });
    fixture = TestBed.createComponent(ChangedPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
