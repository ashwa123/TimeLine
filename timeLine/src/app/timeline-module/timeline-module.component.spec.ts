import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineModuleComponent } from './timeline-module.component';

describe('TimelineModuleComponent', () => {
  let component: TimelineModuleComponent;
  let fixture: ComponentFixture<TimelineModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
