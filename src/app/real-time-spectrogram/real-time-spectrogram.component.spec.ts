import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeSpectrogramComponent } from './real-time-spectrogram.component';

describe('RealTimeSpectrogramComponent', () => {
  let component: RealTimeSpectrogramComponent;
  let fixture: ComponentFixture<RealTimeSpectrogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimeSpectrogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeSpectrogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
