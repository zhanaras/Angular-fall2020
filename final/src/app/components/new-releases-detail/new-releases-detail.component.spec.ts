import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasesDetailComponent } from './new-releases-detail.component';

describe('NewReleasesDetailComponent', () => {
  let component: NewReleasesDetailComponent;
  let fixture: ComponentFixture<NewReleasesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReleasesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReleasesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
