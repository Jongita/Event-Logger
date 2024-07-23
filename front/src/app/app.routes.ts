import { Routes } from '@angular/router';
import { ListEventsComponent } from './components/events/list-events/list-events.component';
import { NewEventComponent } from './components/events/new-event/new-event.component';
import { UpdateEventComponent } from './components/events/update-event/update-event.component';

export const routes: Routes = [
    {path:"logger/list",component:ListEventsComponent},
    {path:"logger/new",component:NewEventComponent},
    {path:"logger/:id",component:UpdateEventComponent},
];

