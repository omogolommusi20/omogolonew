import { Component } from '@angular/core';
import { Aboutme } from '../aboutme/aboutme';
import { Skills } from '../skills/skills';
import { Contactform } from '../contactform/contactform';  // Add this import
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [Aboutme, Skills, Contactform, CommonModule],  // Add Contactform to imports
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage {
  // Component logic here
}