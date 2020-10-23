import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPersonalitiesComponent } from './famous-personalities.component';

describe('FamousPersonalitiesComponent', () => {
  let component: FamousPersonalitiesComponent;
  let fixture: ComponentFixture<FamousPersonalitiesComponent>;

  beforeEach(async(() => {
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
