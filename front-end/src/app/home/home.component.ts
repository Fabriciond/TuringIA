import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { EventsComponent } from '../events/events.component';
import { CommonModule } from '@angular/common';
import { PlansComponent } from '../plans/plans.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent, HeroComponent,EventsComponent,PlansComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
