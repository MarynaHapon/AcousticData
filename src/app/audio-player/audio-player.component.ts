import { Component, OnInit, OnDestroy } from '@angular/core';
import { AudioTrack } from '../audio-track';
import { TrackService } from '../track.service';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})

export class AudioPlayerComponent implements OnInit, OnDestroy {
  tracks: AudioTrack[];

  constructor( private trackService: TrackService ) {
    this.getTracks();
    this.trackIndex = 0;
    this.currentTrack = this.tracks[this.trackIndex];
  }
  public audio: any = null;
  public playing = false;
  public currentTrack: AudioTrack;
  public trackIndex = 0;
  public list;
  panelOpenState = false;

  public selected;

  ngOnInit() {
    this.audio = new Audio();
  }

  getTracks(): void {
    this.trackService.getTracks()
      .subscribe(tracks => this.tracks = tracks);
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

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
