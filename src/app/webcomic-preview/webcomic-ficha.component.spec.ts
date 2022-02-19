import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomicPreviewComponent } from './webcomic-preview.component';

describe('WebcomicFichaComponent', () => {
  let component: WebcomicPreviewComponent;
  let fixture: ComponentFixture<WebcomicPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcomicPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcomicPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
