import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StoriesListComponent} from "./stories-list/stories-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoriesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hacker-news-web';
}
