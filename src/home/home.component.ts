import { Component, OnInit } from '@angular/core';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@Component({
  standalone: true,
  imports: [NgxTypedWriterModule],
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
