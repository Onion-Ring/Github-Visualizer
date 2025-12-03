import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSearch } from "./user-search/user-search";
import { UserInfo } from "./user-info/user-info";

@Component({
  selector: 'app-root',
  imports: [UserSearch, UserInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Github-Visualizer';
}
