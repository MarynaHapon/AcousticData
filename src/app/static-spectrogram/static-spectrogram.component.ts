import { Component, OnInit } from '@angular/core';
import { AudioTrack } from '../audio-track';
import { TRACKS } from '../audio-tracks';

declare function StaticSpectrogram(filename, selector, options): void;
declare function buildStaticSpectrogram(filename, selector, options): void;
declare function deleteStaticSpectrogram(): void;

@Component({
  selector: 'app-static-spectrogram',
  templateUrl: './static-spectrogram.component.html',
  styleUrls: ['./static-spectrogram.component.css']
})
export class StaticSpectrogramComponent implements OnInit {
  public tracks: AudioTrack[] = TRACKS;

  constructor() { }

  ngOnInit() {
  }

  public buildSpectrogram(audio) {
    buildStaticSpectrogram(audio, '#vis', {width: 710, height: 200, maxFrequency: 22000, sampleRate: 44100});
  }

  public del() {
    deleteStaticSpectrogram();
  }
}
