import { Component, inject, output, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubRequestService } from '../services/github-request-service';
import { AccountInfoService } from '../services/account-info-service';
import { ErrorService } from '../services/error-service';

@Component({
  selector: 'app-user-search',
  imports: [FormsModule],
  templateUrl: './user-search.html',
  styleUrl: './user-search.css',  
})
export class UserSearch {

  usernameIntroduced = signal<string>("");
  githubRequestService = inject(GithubRequestService);
  accountInfoService = inject(AccountInfoService);
  errorService = inject(ErrorService);
  userSearched = output<boolean>();

  async searchUserName() {

    if (this.usernameIntroduced().trim().length > 0) {
      
      this.usernameIntroduced.set(this.usernameIntroduced().trim());
      
      try {        
        this.accountInfoService.setGithubProfileInformation(await this.githubRequestService.getUserInformation(this.usernameIntroduced()));
        await this.accountInfoService.setGithubRepositoriesInfo(await this.githubRequestService.getUserRepositories(this.usernameIntroduced()));        
        this.errorService.setErrorMessage({ statusCode: undefined, message: undefined });                
      } catch (error: any) {
        this.errorService.setErrorMessage({ statusCode: error.response.status, message: error.response.data.message });
      }

      this.usernameIntroduced.set("");
    }

  }

}
