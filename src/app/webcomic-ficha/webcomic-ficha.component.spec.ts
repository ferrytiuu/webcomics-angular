import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomicFichaComponent } from './webcomic-ficha.component';

describe('WebcomicFichaComponent', () => {
  let component: WebcomicFichaComponent;
  let fixture: ComponentFixture<WebcomicFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcomicFichaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcomicFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
