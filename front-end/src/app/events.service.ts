import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  static addEvent(value: any) {
    throw new Error('Method not implemented.');
  }
  events: any = [];
  constructor(private http: HttpClient) {
    this.getEvents();
  }
  getEvents() {
    this.http.get('http://localhost:8080/event').subscribe((data) => {
      this.events = data;
      console.log(data);
    });
  }
  getEvent(id: number) {
    return this.http.get(`http://localhost:8080/event/${id}`);
  }
  addEvent(event: any) {
    return this.http
      .post('http://localhost:8080/event', event)
      .subscribe((data) => {
        console.log(data);
      });
  }
  deleteEvent(id: number) {
    return this.http.delete(`http://localhost:8080/event/${id}`);
  }
  updateEvent(id: number, event: any) {
    return this.http.put(`http://localhost:8080/event/${id}`, event);
  }
}
