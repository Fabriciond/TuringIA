import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EventsService } from '../events.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.css',
})
export class PanelAdminComponent {
  events: any[] = [];

  constructor(private eventsService: EventsService, private router: Router) {
    this.events = this.eventsService.events;
  }

  deleteEvent(id: number) {
    this.eventsService.deleteEvent(id).subscribe({
      next: (response) => console.log('Evento eliminado', response),
      error: (err) => console.error('Error al eliminar el evento:', err)
    });
  }

  editEvent(id: string) {
    this.router.navigate(['/events', id]);
  }

  addEvent() {
    this.router.navigate(['/events']);
  }
}
