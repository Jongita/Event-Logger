import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }

  public getEvents(){
    return this.http.get<Event[]>('http://localhost:5000/logger/');
  }

  public getEvent(id:number) {
    return this.http.get<Event>('http://localhost:5000/logger/'+id);
  }

  public addEvent(event:Event){
    return this.http.post('http://localhost:5000/logger/', event);
  }

  public updateEvent(event:Event){
    return this.http.put('http://localhost:5000/logger/', event);
  }

  public deleteEvent(id:number){
    return this.http.delete('http://localhost:5000/logger/'+id);
  }
}
