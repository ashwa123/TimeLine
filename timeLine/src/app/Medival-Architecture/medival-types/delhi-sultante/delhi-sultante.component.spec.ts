import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiSultanteComponent } from './delhi-sultante.component';

describe('DelhiSultanteComponent', () => {
  let component: DelhiSultanteComponent;
  let fixture: ComponentFixture<DelhiSultanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelhiSultanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelhiSultanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
