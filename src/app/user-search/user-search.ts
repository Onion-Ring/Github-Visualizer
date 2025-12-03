import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubRequestService } from '../services/github-request-service';

@Component({
  selector: 'app-user-search',
  imports: [FormsModule],
  templateUrl: './user-search.html',
  styleUrl: './user-search.css',
})
export class UserSearch {

  usernameIntroduced = signal<string>("");
  githubService = inject(GithubRequestService);
  userSearched = output<boolean>();

  async searchUserName() {

    if (this.usernameIntroduced().trim().length > 0) {      
      this.usernameIntroduced.set(this.usernameIntroduced().trim());
      //sets user info
      await this.githubService.getUserInformation(this.usernameIntroduced());      
      this.usernameIntroduced.set("");
    }

  }

}
