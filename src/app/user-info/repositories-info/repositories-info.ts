import { Component, inject } from '@angular/core';
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

  githubProfile = new GithubProfileModel();
  repos : RepositoryModel[] = [];
  accountService = inject(AccountInfoService);
  errorService = inject(ErrorService);

  constructor() {
    this.errorService.setErrorMessage({ statusCode: undefined, message: undefined });
    this.githubProfile = this.accountService.getGithubProfile();         
  }

  ngOnInit() {
    this.errorService.setErrorMessage({ statusCode: undefined, message: undefined });
    this.githubProfile = this.accountService.getGithubProfile();
    this.accountService.githubRepos$.subscribe(repos => {
      this.repos = repos;
    });
  }
}
