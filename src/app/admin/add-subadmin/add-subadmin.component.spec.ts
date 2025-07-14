import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubadminComponent } from './add-subadmin.component';

describe('AddSubadminComponent', () => {
  let component: AddSubadminComponent;
  let fixture: ComponentFixture<AddSubadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubadminComponent]
    });
    fixture = TestBed.createComponent(AddSubadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
