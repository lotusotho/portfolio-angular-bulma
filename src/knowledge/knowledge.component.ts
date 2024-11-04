import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NgxTimelineAlbeModule, TimelineItem } from 'ngx-timeline-albe';

@Component({
  standalone: true,
  imports: [NgxTimelineAlbeModule],
  selector: 'knowledge',
  templateUrl: 'knowledge.component.html',
})
export class KnowledgeComponent implements OnInit {
  constructor() {
    let data: Array<TimelineItem> | String;
  }

  public set data(v: Array<TimelineItem> | String) {
    this.data = v;
  }

  public get data(): Array<TimelineItem> | String {
    return this.data;
  }

  ngOnInit() {}
}
