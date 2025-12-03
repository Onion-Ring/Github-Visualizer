import { Component, inject } from '@angular/core';
import { Repository } from "./repository/repository";
import { GithubProfileModel } from '../../models/github-profile';
import { GithubRequestService } from '../../services/github-request-service';

@Component({
  selector: 'app-repositories-info',
  imports: [Repository],
  templateUrl: './repositories-info.html',
  styleUrl: './repositories-info.css',
})
export class RepositoriesInfo {
  githubProfile = new GithubProfileModel();
  githubService = inject(GithubRequestService);

  constructor() {
    this.githubProfile = this.githubService.getGithubProfile();
  }
}
