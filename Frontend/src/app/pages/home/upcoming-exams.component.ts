import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-exams',
  templateUrl: './upcomingexams.html',
  styleUrls: ['./upcoming-exams.component.css']
})
export class UpcomingExamsComponent {
  exams = [
    { name: 'Math Exam', date: new Date('2024-11-15'), type: 'Exam' },
    { name: 'Project Deadline', date: new Date('2024-12-01'), type: 'Deadline' },
    { name: 'Science Exam', date: new Date('2024-12-10'), type: 'Exam' },
  ];
}
