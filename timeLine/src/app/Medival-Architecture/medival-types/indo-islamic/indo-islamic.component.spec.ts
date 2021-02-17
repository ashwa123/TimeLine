import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoIslamicComponent } from './indo-islamic.component';

describe('IndoIslamicComponent', () => {
  let component: IndoIslamicComponent;
  let fixture: ComponentFixture<IndoIslamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndoIslamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoIslamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
