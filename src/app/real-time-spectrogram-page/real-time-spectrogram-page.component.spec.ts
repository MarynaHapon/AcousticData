import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeSpectrogramPageComponent } from './real-time-spectrogram-page.component';

describe('RealTimeSpectrogramPageComponent', () => {
  let component: RealTimeSpectrogramPageComponent;
  let fixture: ComponentFixture<RealTimeSpectrogramPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimeSpectrogramPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeSpectrogramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
