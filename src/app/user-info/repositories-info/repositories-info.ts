import { Component, inject, signal } from '@angular/core';
import { Repository } from "./repository/repository";
import { GithubProfileModel } from '../../models/github-profile';
import { GithubRequestService } from '../../services/github-request-service';
import { AccountInfoService } from '../../services/account-info-service';
import { ErrorService } from '../../services/error-service';
import { RepositoryModel } from '../../models/repository';

@Component({
  selector: 'app-repositories-info',
  imports: [Repository],
  templateUrl: './repositories-info.html',
  styleUrl: './repositories-info.css',
})
export class RepositoriesInfo {

  accountService = inject(AccountInfoService);
  githubProfile = this.accountService.getGithubProfile();
  repos = this.accountService.getGithubRepos();  
  errorService = inject(ErrorService);

  ngOnInit() {
    this.errorService.setErrorMessage({ statusCode: undefined, message: undefined });    
  }

}
