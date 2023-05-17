import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IabiriComponent } from './iabiri.component';

describe('IabiriComponent', () => {
  let component: IabiriComponent;
  let fixture: ComponentFixture<IabiriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IabiriComponent]
    });
    fixture = TestBed.createComponent(IabiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
