import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSpectrogramComponent } from './static-spectrogram.component';

describe('StaticSpectrogramComponent', () => {
  let component: StaticSpectrogramComponent;
  let fixture: ComponentFixture<StaticSpectrogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticSpectrogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticSpectrogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
