import { ComponentFixture, TestBed } from '@angular/core/testing';

import { filtrarPipe } from './filtrar-cerca.component';

describe('filtrarPipe', () => {
  let component: filtrarPipe;
  let fixture: ComponentFixture<filtrarPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ filtrarPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(filtrarPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
