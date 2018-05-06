import { Component, OnInit, OnDestroy } from '@angular/core';
import { AudioTrack } from './audio-track';
import { trackList } from './audio-tracks';
import { AudioPlayerService } from './audio-player.service';

declare function StaticSpectrogram(filename, selector, options): void;
declare function buildStaticSpectrogram(filename, selector, options): void;
declare function deleteStaticSpectrogram(): void;


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})

export class AudioPlayerComponent implements OnInit, OnDestroy {
  constructor() {
    this.trackIndex = 0;
    this.currentTrack = this.tracks[this.trackIndex];
  }
  public audio: any = null;
  public playing = false;
  public tracks: AudioTrack[] = trackList;
  public currentTrack: AudioTrack;
  public trackIndex = 0;
  public list;
  panelOpenState = false;

  public selected;

  ngOnInit() {
    this.audio = new Audio();
  }

  playTrack() {
    this.audio.play();
    this.playing = true;
  }

  pauseTrack() {
    this.audio.pause();
    this.playing = false;
  }

  stopTrack() {
    this.audio.pause();
    this.playing = false;
    this.audio.currentTime = 0;
  }

  nextTrack() {
    this.stopTrack();
    this.trackIndex++;
    if (this.trackIndex > this.tracks.length) {
      this.trackIndex = 0;
    }
    this.currentTrack = this.tracks[this.trackIndex];
    this.audio.src = this.currentTrack.url;
    this.audio.load();
    this.playTrack();
  }

  previousTrack() {
    this.stopTrack();
    this.trackIndex--;
    if (this.trackIndex < 0) {
      this.trackIndex = this.tracks.length - 1;
    }
    this.currentTrack = this.tracks[this.trackIndex];
    this.audio.src = this.currentTrack.url;
    this.audio.load();
    this.playTrack();
  }

  setTrack(track: AudioTrack) {
    this.stopTrack();
    this.trackIndex = track.id;
    this.currentTrack = this.tracks[track.id];
    this.audio.src = this.currentTrack.url;
    this.audio.load();
    this.playTrack();
  }

  setVolume(vol) {
    this.audio.volume = vol;
  }

  setProgress(prog) {
    this.audio.currentTime = prog;
  }

  public buildSpectrogram(audio) {
    buildStaticSpectrogram(audio, '#vis', {width: 710, height: 200, maxFrequency: 22000, sampleRate: 44100});
  }

  public del() {
    deleteStaticSpectrogram();
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
