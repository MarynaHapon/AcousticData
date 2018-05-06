import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSpectrogramPageComponent } from './static-spectrogram-page.component';

describe('StaticSpectrogramPageComponent', () => {
  let component: StaticSpectrogramPageComponent;
  let fixture: ComponentFixture<StaticSpectrogramPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticSpectrogramPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticSpectrogramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
