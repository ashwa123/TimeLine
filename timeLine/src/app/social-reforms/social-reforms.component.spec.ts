import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialReformsComponent } from './social-reforms.component';

describe('SocialReformsComponent', () => {
  let component: SocialReformsComponent;
  let fixture: ComponentFixture<SocialReformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialReformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialReformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
