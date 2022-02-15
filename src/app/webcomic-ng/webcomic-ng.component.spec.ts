import { ComponentFixture, TestBed } from '@angular/core/testing';

import { webcomicNgComponent } from './webcomic-ng.component';

describe('WebcomicNgComponent', () => {
  let component: webcomicNgComponent;
  let fixture: ComponentFixture<webcomicNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ webcomicNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(webcomicNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
