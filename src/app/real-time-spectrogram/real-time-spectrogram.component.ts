import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-time-spectrogram',
  templateUrl: './real-time-spectrogram.component.html',
  styleUrls: ['./real-time-spectrogram.component.css']
})
export class RealTimeSpectrogramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public play() {
    init('btn-microphone', 'btn-song', 'select-song');
    requestMic();
  }
}
