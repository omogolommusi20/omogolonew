import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Project {
  id?: string;
  description: string;
  fileUrl: string;
  fileName?: string;
  dateAdded?: any;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects implements OnInit {
  projects$: Observable<Project[]>;
  loadedProjects: Project[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private firestore: Firestore) {
    const projectsCollection = collection(this.firestore, 'projects');
    this.projects$ = collectionData(projectsCollection, { idField: 'id' }) as Observable<Project[]>;
  }

  ngOnInit() {
    this.projects$.subscribe({
      next: (projects) => {
        this.loadedProjects = projects.map(project => ({
          ...project,
          dateAdded: project.dateAdded?.toDate() // Convert Firestore timestamp to Date
        }));
        this.isLoading = false;
        localStorage.setItem('projects', JSON.stringify(this.loadedProjects));
      },
      error: (err) => {
        this.error = 'Failed to load projects. Showing cached version.';
        this.isLoading = false;
        this.loadedProjects = this.getStoredProjects();
      }
    });
  }

  getStoredProjects(): Project[] {
    const stored = localStorage.getItem('projects');
    return stored ? JSON.parse(stored) : [];
  }

  downloadFile(url: string, fileName?: string) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = fileName || 'project-download';
    link.click();
  }
}