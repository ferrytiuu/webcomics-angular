import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomicCardComponent } from './webcomic-card.component';

describe('WebcomicCardComponent', () => {
  let component: WebcomicCardComponent;
  let fixture: ComponentFixture<WebcomicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcomicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcomicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
