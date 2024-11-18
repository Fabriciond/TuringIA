import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { EventsService } from '../events.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-events',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './page-events.component.html',
  styleUrl: './page-events.component.css'
})
export class PageEventsComponent {

  events: any = [];
  constructor(private eventsService: EventsService) {}
  ngOnInit() {
    this.events = this.eventsService.events;
    console.log(this.events);
  }

}
