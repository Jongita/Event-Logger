import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventManagerPlugin } from '@angular/platform-browser';

@Component({
  selector: 'app-update-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-event.component.html',
  styleUrl: './update-event.component.css'
})
export class UpdateEventComponent {
    public timestamp:string = '';
    public message:string ="";
    public user_id:number=0;
    public transaction_id:number=0;
    public type:string="";
    public id?:number

    constructor (private route:ActivatedRoute, private router:Router, private eventsService:EventsService){
      this.eventsService.getEvent(this.route.snapshot.params['id']).subscribe({
        next:(event)=>{
      this.timestamp=(event.timestamp as unknown as string).split('T')[0];
      this.type=event.type
      this.message=event.message;
      this.user_id=event.user_id;
      this.transaction_id=event.transaction_id;
      this.id=event.id
    },
    error:(error)=>  {
      console.log(error);
    }
  })
}
    public eventSubmit(form:NgForm){
    console.log(form.form.value);
    this.eventsService.updateEvent({id:this.id, ...form.form.value}).subscribe({
 
      next:(data)=>{
        this.router.navigate(['logger', 'list']);
      },
      error:(error)=>{
     console.log(error.error.text);
    }
    })
  }
}


