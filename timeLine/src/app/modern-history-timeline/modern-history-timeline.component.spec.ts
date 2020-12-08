import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModernHistoryTimelineComponent } from './modern-history-timeline.component';

describe('ModernHistoryTimelineComponent', () => {
  let component: ModernHistoryTimelineComponent;
  let fixture: ComponentFixture<ModernHistoryTimelineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernHistoryTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernHistoryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
