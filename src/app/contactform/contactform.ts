import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.html',
  styleUrl: './contactform.css'
})
export class Contactform {
  contactData = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    linkedin: '',
    github: ''
  };

  submitted = false;

  // Method to load saved data from localStorage
  loadSavedData() {
    const savedData = localStorage.getItem('contactData');
    return savedData ? JSON.parse(savedData) : null;
  }

  onSubmit() {
    // Save to local storage
    localStorage.setItem('contactData', JSON.stringify(this.contactData));
    this.submitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.contactData = {
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        linkedin: '',
        github: ''
      };
    }, 3000);
  }
}