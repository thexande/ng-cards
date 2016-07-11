import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {
  title;
  constructor() {
    this.title = "card title"
  }

  ngOnInit() {
  }

}
