import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { AudioTrack } from './audio-track';
import { TRACKS } from './audio-tracks';
import { LoggerService } from './logger.service';


@Injectable()
export class TrackService {
  constructor( private logger: LoggerService ) { }

  getTracks(): Observable<AudioTrack[]> {
    this.logger.log('TrackService: fetched audio tracks');
    return of(TRACKS);
  }

}
