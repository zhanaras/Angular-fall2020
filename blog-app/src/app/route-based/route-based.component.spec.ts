import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBasedComponent } from './route-based.component';

describe('RouteBasedComponent', () => {
  let component: RouteBasedComponent;
  let fixture: ComponentFixture<RouteBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
