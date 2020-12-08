import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FamousPersonalitiesComponent } from './famous-personalities.component';

describe('FamousPersonalitiesComponent', () => {
  let component: FamousPersonalitiesComponent;
  let fixture: ComponentFixture<FamousPersonalitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FamousPersonalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousPersonalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
