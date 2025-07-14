import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTableComponent } from './manage-table.component';

describe('ManageTableComponent', () => {
  let component: ManageTableComponent;
  let fixture: ComponentFixture<ManageTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTableComponent]
    });
    fixture = TestBed.createComponent(ManageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
