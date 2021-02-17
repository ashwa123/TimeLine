import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MughalsComponent } from './mughals.component';

describe('MughalsComponent', () => {
  let component: MughalsComponent;
  let fixture: ComponentFixture<MughalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MughalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MughalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
