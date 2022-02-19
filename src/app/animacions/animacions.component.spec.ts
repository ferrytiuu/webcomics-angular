import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionsComponent } from './animacions.component';

describe('AnimacionsComponent', () => {
  let component: AnimacionsComponent;
  let fixture: ComponentFixture<AnimacionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
