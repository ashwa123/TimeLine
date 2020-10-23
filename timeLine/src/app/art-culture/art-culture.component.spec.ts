import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCultureComponent } from './art-culture.component';

describe('ArtCultureComponent', () => {
  let component: ArtCultureComponent;
  let fixture: ComponentFixture<ArtCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
