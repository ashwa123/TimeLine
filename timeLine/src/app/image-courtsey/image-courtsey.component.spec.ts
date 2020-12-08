import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageCourtseyComponent } from './image-courtsey.component';

describe('ImageCourtseyComponent', () => {
  let component: ImageCourtseyComponent;
  let fixture: ComponentFixture<ImageCourtseyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCourtseyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCourtseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
