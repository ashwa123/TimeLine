import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernHistoryComponent } from './modern-history.component';

describe('ModernHistoryComponent', () => {
  let component: ModernHistoryComponent;
  let fixture: ComponentFixture<ModernHistoryComponent>;

  beforeEach(async(() => {
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
