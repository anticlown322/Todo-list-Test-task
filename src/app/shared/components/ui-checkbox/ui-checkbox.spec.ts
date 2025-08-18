import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCheckbox } from './ui-checkbox';

describe('UiCheckbox', () => {
  let component: UiCheckbox;
  let fixture: ComponentFixture<UiCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCheckbox],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
