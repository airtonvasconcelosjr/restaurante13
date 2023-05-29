import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaDaSemanaComponent } from './dia-da-semana.component';

describe('DiaDaSemanaComponent', () => {
  let component: DiaDaSemanaComponent;
  let fixture: ComponentFixture<DiaDaSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaDaSemanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaDaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
