import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsiComponent } from './parsi.component';

describe('ParsiComponent', () => {
  let component: ParsiComponent;
  let fixture: ComponentFixture<ParsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
