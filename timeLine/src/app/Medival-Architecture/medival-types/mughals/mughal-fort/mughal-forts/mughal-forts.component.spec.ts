import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MughalFortsComponent } from './mughal-forts.component';

describe('MughalFortsComponent', () => {
  let component: MughalFortsComponent;
  let fixture: ComponentFixture<MughalFortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MughalFortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MughalFortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
