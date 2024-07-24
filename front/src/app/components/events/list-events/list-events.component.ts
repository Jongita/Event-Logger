import { Component } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Event } from '../../../models/event';

@Component({
  selector: 'app-list-events',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {
  public events:Event[]=[];

  private loadEvents(){
  this.eventsService.getEvents().subscribe((data)=>{
    console.log(data);
    this.events=data;
    });
  }

  constructor (private eventsService:EventsService){
    this.loadEvents();
  }

  public deleteEvent(id:number){
    this.eventsService.deleteEvent(id).subscribe((data)=>{
      this.loadEvents();
    })
  }

}
