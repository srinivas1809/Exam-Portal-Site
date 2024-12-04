import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-exams',
  templateUrl: './upcoming-exams.component.html',
  styleUrls: ['./upcoming-exams.component.css']
})
export class UpcomingExamsComponent implements OnInit {
  upcomingExams = [
    { name: 'Full Stack Exam', date: '2024-12-9', subject: 'Full Stack' },
    { name: 'Mobile App Exam', date: '2024-12-11', subject: 'Mobile App Exam' },
    { name: 'DBMS Exam', date: '2024-12-13', subject: 'DBMS Exam' },
    { name: 'Operating Systems Exam', date: '2024-12-17', subject: 'Operating Systems Exam' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

