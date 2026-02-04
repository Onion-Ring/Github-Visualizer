import { Component } from '@angular/core';
import { UserSearch } from "./user-search/user-search";
import { UserInfo } from "./user-info/user-info";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [UserSearch, UserInfo,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Github-Visualizer';
}
