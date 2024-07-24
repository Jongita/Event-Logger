import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EventsService } from '../../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css'
})
export class NewEventComponent {
  public currentTimestamp:string = '';

  constructor (private eventsService:EventsService, private router:Router){}

  // public eventSubmit(form:NgForm){
  //   console.log(form.form.value);
  //   this.eventsService.addEvent(form.form.value).subscribe((data)=>{
  //     this.router.navigate(['logger', 'list']);
  //   })
    
  

  public eventSubmit(form: NgForm) {
    this.currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const formDataWithTimestamp = { ...form.form.value, timestamp: this.currentTimestamp };
    console.log(formDataWithTimestamp);
    this.eventsService.addEvent(formDataWithTimestamp).subscribe((data) => {
      this.router.navigate(['logger', 'list']);
    });
  }

}