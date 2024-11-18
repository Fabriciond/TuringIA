import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css',
})
export class CreateEventComponent {
  form: FormGroup;

  // Fields to generate form dynamically
  formFields = [
    { name: 'title', label: 'Título', type: 'text', required: true },
    { name: 'description', label: 'Descripción', type: 'text', required: true },
    { name: 'location', label: 'Lugar', type: 'text', required: true },
    { name: 'date', label: 'Fecha', type: 'date', required: true },
    { name: 'time', label: 'Hora', type: 'time', required: true },
    { name: 'image', label: 'Imagen', type: 'file', required: true },
    {
      name: 'max_capacity',
      label: 'Capacidad Máxima',
      type: 'number',
      required: true,
    },
  ];
  constructor(private fb: FormBuilder, private eventService: EventsService) {
    this.form = this.fb.group({});
  }
  ngOnInit(): void {
    // Create controls dynamically
    this.formFields.forEach((field) => {
      this.form.addControl(
        field.name,
        this.fb.control('', field.required ? Validators.required : null)
      );
    });
  }
  onSubmit(): void {
    if (this.form.valid) {
      this.eventService.addEvent(this.form.value);
      console.log('Formulario enviado:', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
