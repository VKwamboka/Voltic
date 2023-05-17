import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeTeamComponent } from './awesome-team.component';

describe('AwesomeTeamComponent', () => {
  let component: AwesomeTeamComponent;
  let fixture: ComponentFixture<AwesomeTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AwesomeTeamComponent]
    });
    fixture = TestBed.createComponent(AwesomeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
