import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIndexComponent } from './new-index.component';

describe('NewIndexComponent', () => {
  let component: NewIndexComponent;
  let fixture: ComponentFixture<NewIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewIndexComponent]
    });
    fixture = TestBed.createComponent(NewIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
