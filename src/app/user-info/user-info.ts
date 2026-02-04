import { Component, inject, signal } from '@angular/core';
import { ProfileInfo } from "./profile-info/profile-info";
import { RepositoriesInfo } from "./repositories-info/repositories-info";

@Component({
  selector: 'app-user-info',
  imports: [ProfileInfo, RepositoriesInfo],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {




}
