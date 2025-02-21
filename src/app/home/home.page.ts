import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, RouterModule],
})
export class HomePage {
  questionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      question: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      console.log('Pregunta generada', this.questionForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}