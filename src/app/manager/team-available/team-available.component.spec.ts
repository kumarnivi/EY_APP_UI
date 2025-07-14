import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAvailableComponent } from './team-available.component';

describe('TeamAvailableComponent', () => {
  let component: TeamAvailableComponent;
  let fixture: ComponentFixture<TeamAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamAvailableComponent]
    });
    fixture = TestBed.createComponent(TeamAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
