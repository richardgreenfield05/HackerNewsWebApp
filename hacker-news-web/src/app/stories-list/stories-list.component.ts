import {Component, OnInit} from '@angular/core';
import {HackerNewsService} from "../api";

@Component({
  selector: 'app-stories-list',
  standalone: true,
  imports: [],
  templateUrl: './stories-list.component.html',
  styleUrl: './stories-list.component.css'
})
export class StoriesListComponent implements OnInit {

  constructor(private apiService: HackerNewsService) { }

  ngOnInit(): void {
    this.apiService.apiHackerNewsStoriesGet().subscribe(response => {
      console.log(response);
    });
  }
}
