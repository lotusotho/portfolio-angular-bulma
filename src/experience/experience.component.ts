import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-exp',
  templateUrl: 'experience.component.html',
  styleUrl: 'experience.component.css',
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
