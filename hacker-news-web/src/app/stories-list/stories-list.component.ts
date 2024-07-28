import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsService } from "../api";
import { HackerNewsStory } from './model/hacker-news-story';

@Component({
  selector: 'app-stories-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css']
})
export class StoriesListComponent implements OnInit {

  storyIds: number[] = [];
  paginatedStoryIds: number[] = [];
  selectedStory: HackerNewsStory | null = null;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(private apiService: HackerNewsService) { }

  ngOnInit(): void {
    this.apiService.apiHackerNewsStoriesGet().subscribe(response => {
      this.storyIds = response;
      this.totalPages = Math.ceil(this.storyIds.length / this.itemsPerPage);
      this.paginate();
    });
  }

  paginate(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedStoryIds = this.storyIds.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  onStoryClick(id: number): void {
    this.apiService.apiHackerNewsStoryIdGet(id).subscribe(detailResponse => {
      this.selectedStory = detailResponse;
    });
  }
}
