import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  title = 'front-end';
  events: any = [];
  constructor(private eventsService: EventsService) {
    
  }
  ngOnInit() {
    this.events = this.eventsService.events;
  }
}
