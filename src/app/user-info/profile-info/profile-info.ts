import { Component, inject } from '@angular/core';
import { GithubRequestService } from '../../services/github-request-service';
import { GithubProfileModel } from '../../models/github-profile';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-info',
  imports: [DatePipe],
  templateUrl: './profile-info.html',
  styleUrl: './profile-info.css',
})
export class ProfileInfo {
    
  githubProfile = new GithubProfileModel();
  githubService = inject(GithubRequestService);

  constructor(){
    this.githubProfile = this.githubService.getGithubProfile();
  }

}
