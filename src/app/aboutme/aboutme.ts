import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css'
})
export class Aboutme implements OnInit {
  aboutMeText: string = '';
  isEditing: boolean = false;

  ngOnInit() {
    const savedText = localStorage.getItem('aboutMe');
    if (savedText) {
      this.aboutMeText = savedText;
    }
  }

  saveAboutMe() {
    localStorage.setItem('aboutMe', this.aboutMeText);
    this.isEditing = false;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}