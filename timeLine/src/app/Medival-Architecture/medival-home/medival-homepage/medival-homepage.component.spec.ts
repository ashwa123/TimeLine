import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedivalHomepageComponent } from './medival-homepage.component';

describe('MedivalHomepageComponent', () => {
  let component: MedivalHomepageComponent;
  let fixture: ComponentFixture<MedivalHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedivalHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedivalHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
