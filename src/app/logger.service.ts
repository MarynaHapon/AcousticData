import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(msg: any) { console.log(msg); }
  error(msg: any) { console.log(msg); }
  warn(msg: any) { console.log(msg); }

  constructor() { }
}
