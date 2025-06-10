// skills.ts (already good)
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit {
  newSkill: string = '';
  skills: string[] = [];
  isEditing: boolean = false;

  ngOnInit() {
    const savedSkills = localStorage.getItem('skills');
    if (savedSkills) {
      this.skills = JSON.parse(savedSkills);
    }
  }

  addSkill() {
    if (this.newSkill.trim() && !this.skills.includes(this.newSkill.trim())) {
      this.skills.push(this.newSkill.trim());
      this.newSkill = '';
      this.saveSkills();
    }
  }

  removeSkill(skill: string) {
    this.skills = this.skills.filter(s => s !== skill);
    this.saveSkills();
  }

  saveSkills() {
    localStorage.setItem('skills', JSON.stringify(this.skills));
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}