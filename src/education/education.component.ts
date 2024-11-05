import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-education',
  templateUrl: 'education.component.html',
  styleUrl: 'education.component.css',
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
