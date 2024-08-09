import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { StoriesListComponent } from './stories-list.component';
import { HackerNewsService } from '../api';
import { HackerNewsStory } from './model/hacker-news-story';

describe('StoriesListComponent', () => {
  let component: StoriesListComponent;
  let fixture: ComponentFixture<StoriesListComponent>;
  let apiService: HackerNewsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoriesListComponent
      ],
      providers: [
        {
          provide: HackerNewsService,
          useValue: {
            apiHackerNewsStoriesGet: jasmine.createSpy().and.returnValue(of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])),
            apiHackerNewsStoryIdGet: jasmine.createSpy().and.returnValue(of({ id: 1, title: 'Story 1' } as HackerNewsStory))
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StoriesListComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(HackerNewsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with stories and paginate', () => {
    expect(apiService.apiHackerNewsStoriesGet).toHaveBeenCalled();
    expect(component.storyIds.length).toBe(12);
    expect(component.paginatedStoryIds.length).toBe(10);
    expect(component.totalPages).toBe(2);
  });

  it('should go to the next page', () => {
    component.nextPage();
    expect(component.currentPage).toBe(2);
    expect(component.paginatedStoryIds).toEqual([11, 12]);
  });

  it('should not go past the last page', () => {
    component.nextPage();
    component.nextPage();
    expect(component.currentPage).toBe(2);
  });

  it('should go to the previous page', () => {
    component.nextPage();
    component.prevPage();
    expect(component.currentPage).toBe(1);
    expect(component.paginatedStoryIds.length).toBe(10);
  });

  it('should not go before the first page', () => {
    component.prevPage();
    expect(component.currentPage).toBe(1);
  });

  it('should select a story on click', () => {
    component.onStoryClick(1);
    expect(apiService.apiHackerNewsStoryIdGet).toHaveBeenCalledWith(1);
    expect(component.selectedStory).toEqual({ id: 1, title: 'Story 1' } as HackerNewsStory);
  });
});
