import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedViewComponent } from './approved-view.component';

describe('ApprovedViewComponent', () => {
  let component: ApprovedViewComponent;
  let fixture: ComponentFixture<ApprovedViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedViewComponent]
    });
    fixture = TestBed.createComponent(ApprovedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
