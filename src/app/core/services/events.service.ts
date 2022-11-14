import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  public static emitters: { [name: string]: EventEmitter<any> } = {};

  public static get(nameEvent: string): EventEmitter<any> {
    if (!this.emitters[nameEvent]) {
      this.emitters[nameEvent] = new EventEmitter<any>();
    }
    return this.emitters[nameEvent];
  }
}
