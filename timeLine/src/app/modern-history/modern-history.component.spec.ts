import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModernHistoryComponent } from './modern-history.component';

describe('ModernHistoryComponent', () => {
  let component: ModernHistoryComponent;
  let fixture: ComponentFixture<ModernHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
